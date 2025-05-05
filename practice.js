// Load the data
const data = require("./users.json");
const users = data.users;

// ==========================================
// CHALLENGES
// ==========================================

/*
 * Challenge 1: Basic Map
 * Create an array of strings in the format "NAME (AGE)" for all users
 */
function challenge1() {
  // Your code here
  // Expected output: ['Leanne Graham (28)', 'Ervin Howell (32)', ...]
}

/*
 * Challenge 2: Basic Filter
 * Find all users who know JavaScript AND React
 */
function challenge2() {
  // Your code here
  // Expected output: Array of users who have both JavaScript and React in their skills
}

/*
 * Challenge 3: Basic Reduce
 * Calculate the total salary budget for all active users
 */
function challenge3() {
  // Your code here
  // Expected output: Sum of all active users' salaries
}

/*
 * Challenge 4: Intermediate Chaining
 * Find the email addresses of all users who have completed at least one project
 */
function challenge4() {
  // Your code here
  // Expected output: Array of email addresses
}

/*
 * Challenge 5: Intermediate Grouping
 * Group users by their registration year (extract year from registered date)
 */
function challenge5() {
  // Your code here
  // Expected output: Object with years as keys and arrays of users as values
}

/*
 * Challenge 6: Intermediate Sorting
 * Sort users by the number of skills they have (descending)
 */
function challenge6() {
  // Your code here
  // Expected output: Array of users sorted by number of skills (most to least)
}

/*
 * Challenge 7: Advanced Pipeline
 * Find the most valuable employee (highest salary per year of employment)
 */
function challenge7() {
  // Your code here
  // Expected output: User object with highest salary/years ratio
}

/*
 * Challenge 8: Advanced Filtering
 * Find users who have skills that no other user has (unique skills)
 */
function challenge8() {
  // Your code here
  // Expected output: Array of objects with user name and their unique skills
}

/*
 * Challenge 9: Advanced Analysis
 * Find the most efficient department (lowest average hours per completed project)
 */
function challenge9() {
  // Your code here
  // Expected output: Object with department name and efficiency metrics
}

/*
 * Challenge 10: Expert Data Transformation
 * Create a skills matrix showing which users have which skills
 * Format: { 'JavaScript': ['Leanne Graham', 'Ervin Howell', ...], 'React': [...], ... }
 */
function challenge10() {
  // Your code here
  // Expected output: Object with skills as keys and arrays of user names as values
}

// ==========================================
// SOLUTIONS
// ==========================================

// Uncomment this section to see the solutions

/*
// Solution 1
function solution1() {
  return users.map(user => `${user.name} (${user.age})`);
}

// Solution 2
function solution2() {
  return users.filter(user => 
    user.skills.includes('JavaScript') && user.skills.includes('React')
  );
}

// Solution 3
function solution3() {
  return users
    .filter(user => user.isActive)
    .reduce((total, user) => total + user.company.salary, 0);
}

// Solution 4
function solution4() {
  return users
    .filter(user => user.projects.some(project => project.completed))
    .map(user => user.email);
}

// Solution 5
function solution5() {
  return users.reduce((groups, user) => {
    const year = new Date(user.registered).getFullYear();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(user);
    return groups;
  }, {});
}

// Solution 6
function solution6() {
  return [...users]
    .sort((a, b) => b.skills.length - a.skills.length);
}

// Solution 7
function solution7() {
  return users.reduce((mostValuable, user) => {
    const valueRatio = user.company.salary / user.company.yearsEmployed;
    return valueRatio > mostValuable.ratio 
      ? { user: user, ratio: valueRatio } 
      : mostValuable;
  }, { user: null, ratio: 0 }).user;
}

// Solution 8
function solution8() {
  // Create a map of all skills and their counts
  const skillCounts = users
    .flatMap(user => user.skills)
    .reduce((counts, skill) => {
      counts[skill] = (counts[skill] || 0) + 1;
      return counts;
    }, {});
  
  // Find users with unique skills
  return users
    .map(user => {
      const uniqueSkills = user.skills.filter(skill => skillCounts[skill] === 1);
      return {
        name: user.name,
        uniqueSkills
      };
    })
    .filter(item => item.uniqueSkills.length > 0);
}

// Solution 9
function solution9() {
  // Group users by department
  const departments = users.reduce((depts, user) => {
    const dept = user.company.department;
    if (!depts[dept]) {
      depts[dept] = [];
    }
    depts[dept].push(user);
    return depts;
  }, {});
  
  // Calculate efficiency for each department
  const efficiencyByDept = Object.entries(departments).map(([dept, deptUsers]) => {
    const allProjects = deptUsers.flatMap(user => user.projects);
    const completedProjects = allProjects.filter(p => p.completed);
    
    // Calculate total hours for completed projects
    const totalHours = completedProjects.reduce((sum, p) => sum + p.hoursLogged, 0);
    const avgHoursPerProject = completedProjects.length > 0 
      ? totalHours / completedProjects.length 
      : Infinity;
    
    return {
      department: dept,
      completedProjects: completedProjects.length,
      totalHours,
      avgHoursPerProject
    };
  });
  
  // Find the most efficient department (lowest avg hours per project)
  return efficiencyByDept
    .filter(d => d.completedProjects > 0)
    .reduce((mostEfficient, dept) => 
      dept.avgHoursPerProject < mostEfficient.avgHoursPerProject
        ? dept
        : mostEfficient
    );
}

// Solution 10
function solution10() {
  return users.reduce((skillsMatrix, user) => {
    user.skills.forEach(skill => {
      if (!skillsMatrix[skill]) {
        skillsMatrix[skill] = [];
      }
      skillsMatrix[skill].push(user.name);
    });
    return skillsMatrix;
  }, {});
}
*/

// Execute the challenges to see the results
// console.log(challenge1());
// console.log(challenge2());
// etc...

// Uncomment to see solutions
// console.log(solution1());
// console.log(solution2());
// etc...
