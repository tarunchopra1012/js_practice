const data = require("./users.json");
const users = data.users;

// Example 15: Find users with most completed projects
// console.log("\n15. Find users with most completed projects:");
const completedProjectCounts = users.map((user) => {
  const count = user.projects.filter((project) => project.completed).length;
  return { name: user.name, completedProjects: count };
});

const maxProjects = Math.max(
  ...completedProjectCounts.map((item) => item.completedProjects)
);
const usersWithMostProjects = completedProjectCounts.filter(
  (item) => item.completedProjects === maxProjects
);

// console.log(usersWithMostProjects);

// Example 16: Calculate average salary by department
// console.log("\n16. Calculate average salary by department:");
const salaryByDept = users.reduce((depts, user) => {
  const dept = user.company.department;

  if (!depts[dept]) {
    depts[dept] = { total: 0, count: 0 };
  }

  depts[dept].total += user.company.salary;
  depts[dept].count += 1;

  return depts;
}, {});

// console.log(Object.keys(salaryByDept));
// console.log("=============");

// Calculate the averages
Object.keys(salaryByDept).forEach((dept) => {
  salaryByDept[dept].average =
    Math.round((salaryByDept[dept].total / salaryByDept[dept].count) * 100) /
    100;
});

// console.log(salaryByDept);

// Example 17: Find users with all projects completed
// console.log("\n17. Find users who completed all their projects:");
const usersAllCompleted = users.filter(
  (user) =>
    user.projects.length > 0 &&
    user.projects.every((project) => project.completed)
);
// console.log(usersAllCompleted.map((user) => user.name));

// Example 18: Complex sorting - sort by most JavaScript skill mentions, then by salary
// console.log("\n18. Sort users by JavaScript skill and salary:");
const sortedDevs = users
  .filter((user) => user.skills.includes("JavaScript"))
  .sort((a, b) => {
    // First sort by salary
    return b.company.salary - a.company.salary;
  });

// console.log(sortedDevs.map((user) => `${user.name} - $${user.company.salary}`));

// Example 19: Create a productivity report
//console.log("\n19. Create a productivity report:");
const productivityReport = users.map((user) => {
  const totalHours = user.projects.reduce(
    (sum, project) => sum + project.hoursLogged,
    0
  );
  const completedProjects = user.projects.filter(
    (project) => project.completed
  ).length;
  const hoursPerProject = totalHours / user.projects.length || 0;

  return {
    name: user.name,
    totalHours,
    projects: user.projects.length,
    completedProjects,
    hoursPerProject: hoursPerProject.toFixed(1),
  };
});

//console.log(productivityReport);

// Example 20: Find most efficient developer (lowest hours per completed project)
// console.log("\n20. Find most efficient developer:");
const developerEfficiency = users
  .filter((user) => user.projects.some((project) => project.completed)) // Only users with completed projects
  .map((user) => {
    const completedProjects = user.projects.filter(
      (project) => project.completed
    );
    const totalHours = completedProjects.reduce(
      (sum, project) => sum + project.hoursLogged,
      0
    );
    const avgHoursPerProject = totalHours / completedProjects.length;

    return {
      name: user.name,
      avgHoursPerProject,
      completedProjects: completedProjects.length,
    };
  });

// console.log(developerEfficiency);
// console.log("=========================");

const mostEfficient = developerEfficiency.reduce((most, dev) =>
  dev.avgHoursPerProject < most.avgHoursPerProject ? dev : most
);

// console.log(mostEfficient);
// Example 21: Advanced pipeline - analyze user skills distribution
// console.log("\n21. Analyze skill distribution:");
const skillAnalysis = users
  .flatMap((user) => user.skills)
  .reduce((analysis, skill) => {
    analysis[skill] = (analysis[skill] || 0) + 1;
    return analysis;
  }, {});

// console.log(skillAnalysis);
// console.log("=========================");

// Sort skills by frequency (descending)
const sortedSkills = Object.entries(skillAnalysis)
  .sort((a, b) => b[1] - a[1])
  .map(([skill, count]) => ({ skill, count }));

// console.log(sortedSkills);

// Example 22: Find skill gaps - skills that only one or two users have
// console.log("\n22. Find skill gaps (skills known by only 1-2 users):");
const skillGaps = Object.entries(skillAnalysis)
  .filter(([_, count]) => count <= 2)
  .map(([skill, count]) => ({ skill, count }));

// console.log(skillGaps);

// Example 23: Calculate average years of experience vs. salary correlation
// console.log("\n23. Analyze experience vs. salary:");
// Group by years of experience
const experienceGroups = users.reduce((groups, user) => {
  const years = user.company.yearsEmployed;
  if (!groups[years]) {
    groups[years] = [];
  }
  groups[years].push(user);
  return groups;
}, {});

// console.log(Object.entries(experienceGroups));
// console.log("=========================");

// Calculate average salary for each experience group
const experienceSalaryCorrelation = Object.entries(experienceGroups)
  .map(([years, users]) => {
    const avgSalary =
      users.reduce((sum, user) => sum + user.company.salary, 0) / users.length;
    return {
      yearsExperience: parseInt(years),
      averageSalary: avgSalary,
      numberOfUsers: users.length,
    };
  })
  .sort((a, b) => a.yearsExperience - b.yearsExperience);

// console.log(experienceSalaryCorrelation);

// Example 24: Generate a comprehensive team report
console.log("\n24. Generate comprehensive team report:");

// Calculate total age first
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// Calculate department count
const departmentCount = users.reduce((counts, user) => {
  const dept = user.company.department;
  counts[dept] = (counts[dept] || 0) + 1;
  return counts;
}, {});

// Now create the team report
const teamReport = {
  totalUsers: users.length,
  activeUsers: users.filter((user) => user.isActive).length,
  averageAge: totalAge / users.length,
  averageSalary:
    users.reduce((sum, user) => sum + user.company.salary, 0) / users.length,
  totalProjects: users.flatMap((user) => user.projects).length,
  completedProjects: users
    .flatMap((user) => user.projects)
    .filter((p) => p.completed).length,
  totalHours: users
    .flatMap((user) => user.projects)
    .reduce((sum, p) => sum + p.hoursLogged, 0),
  topSkills: sortedSkills.slice(0, 5),
  departmentBreakdown: departmentCount,
};

console.log(teamReport);
