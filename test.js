const data = require("./users.json");
const users = data.users;

const skillAnalysis = users
  .flatMap((user) => user.skills)
  .reduce((analysis, skill) => {
    analysis[skill] = (analysis[skill] || 0) + 1;
    return analysis;
  }, {});

console.log(
  Object.entries(skillAnalysis)
    .sort((a, b) => b[1] - a[1])
    .map(([skill, count]) => ({
      skill,
      count,
    }))
);
