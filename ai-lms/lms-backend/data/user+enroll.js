const { USERS } = require("./user");
const { COURSE } = require("./course");

// Mock database for user enrollments
const userEnrollments = {};

// Generate associations
USERS.forEach((user) => {
  userEnrollments[user.id] = [];
});

COURSE.forEach((course, index) => {
  USERS.forEach((user) => {
    if (user.id % 2 === 0 && (course.id === 1 || course.id === 2)) {
      // Assign multiple courses to even-indexed users
      userEnrollments[user.id].push(course.id);
    } else if (user.id % 3 === 0 && course.id === 3) {
      // Assign single course to users divisible by 3
      userEnrollments[user.id].push(course.id);
    } else {
      // Leave some users with no courses
    }
  });
});

module.exports = { userEnrollments };
