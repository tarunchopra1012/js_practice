const data = require("./users.json");
const users = data.users;

// Example 1: Using map() to extract all user names
const names = users.map((user) => user.name);

// Example 2: Using filter() to find active users
const activeUsers = users.filter((user) => user.isActive);
// console.log(activeUsers.map((user) => user.name));

// Example 3: Using forEach() to log user emails
// users.forEach((user) => console.log(user.email));

// Example 4: Using find() to get a user by username
const findUser = (username) => {
  return users.find((user) => user.username === username);
};

// console.log(findUser("Bret"));

// Example 5: Using some() to check if any user is under 25
const usersUnder25 = users.some((user) => user.age < 25);
// console.log(usersUnder25);

// Example 6: Using every() to check if all users have email
const usersWithEmail = users.every(
  (user) => user.email && user.email.length > 0
);
// console.log(usersWithEmail);

// Example 7: Using reduce() to calculate average age
const totalAge = users.reduce((acc, user) => {
  return acc + user.age;
}, 0);
const avgAge = totalAge / users.length;
console.log(avgAge);
