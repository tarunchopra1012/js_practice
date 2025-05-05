const data = require("./users.json");
const users = data.users;

// Example 8: Chain map() and filter() to get emails of active users

const activeUsersEmails = users
  .filter((user) => user.isActive)
  .map((user) => user.email);
// console.log(activeUsersEmails);

// Example 9: Use reduce() to count users by department
const usersByDepartment = users.reduce((acc, user) => {
  const dept = user.company.department;
  acc[dept] = (acc[dept] || 0) + 1;
  return acc;
}, {});
// console.log(usersByDepartment);

// Example 10: Get all user skills (unique)
const allSkills = users
  .flatMap((user) => user.skills)
  .reduce((unique, skill) => {
    if (!unique.includes(skill)) {
      unique.push(skill);
    }
    return unique;
  }, []);

// console.log(allSkills);

// Example 11: Find users with specific skills
const reactDevs = users.filter((user) => user.skills.includes("React"));
// console.log(reactDevs.map((user) => user.name));

// Example 12: Sort users by salary (descending)
// console.log("\n12. Sort users by salary (descending):");
const sortedBySalary = [...users].sort(
  (a, b) => b.company.salary - a.company.salary
);
// console.log(
//   sortedBySalary.map((user) => `${user.name}: $${user.company.salary}`)
// );

// Example 13: Group users by city
// console.log("\n13. Group users by city:");
const usersByCity = users.reduce((cities, user) => {
  const city = user.address.city;
  if (!cities[city]) {
    cities[city] = [];
  }
  cities[city].push(user.name);
  return cities;
}, {});
// console.log(usersByCity);

// Example 14: Calculate total hours logged by each user
console.log("\n14. Calculate total hours logged by each user:");
const userHours = users.map((user) => {
  const totalHours = user.projects.reduce(
    (total, project) => total + project.hoursLogged,
    0
  );
  return { name: user.name, totalHours };
});
console.log(userHours);
