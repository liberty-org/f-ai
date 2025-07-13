// Controller for managing courses and learners
const { COURSE } = require("../data/course");
const { userEnrollments } = require("../data/user+enroll");
// Import USERS to validate user existence
const { USERS } = require("../data/user");

// Fetch all available courses
const getCourses = (req, res) => {
  res.json(COURSE);
};

// Enroll a user in a course
const enrollUser = (req, res) => {
  const { userId, courseId } = req.body;

  // Validate required fields
  if (!userId || !courseId) {
    return res
      .status(400)
      .json({ error: "Missing userId or courseId in request." });
  }

  // Ensure numeric types if needed
  // Check user existence
  const userExists = USERS.find((user) => user.id === userId);
  if (!userExists) {
    return res.status(404).json({ error: "User not found" });
  }

  // Check course existence
  const courseExists = COURSE.find((course) => course.id === courseId);
  if (!courseExists) {
    return res.status(404).json({ error: "Course not found" });
  }

  // Initialize enrollment if absent
  if (!userEnrollments[userId]) {
    userEnrollments[userId] = [];
  }

  // Prevent duplicate enrollment
  if (userEnrollments[userId].includes(courseId)) {
    return res.status(400).json({
      error: `User ${userId} is already enrolled in course ${courseId}`,
    });
  }

  // Enroll the user
  userEnrollments[userId].push(courseId);

  // Send confirmation message
  return res.status(200).json({
    message: `User ${userId} successfully enrolled in course ${courseId}.`,
  });
};

// View user progress
const getUserCourses = (req, res) => {
  const { id } = req.params;

  if (!userEnrollments[id]) {
    return res
      .status(404)
      .json({ error: "User not found or no courses enrolled" });
  }

  const enrolledCourses = userEnrollments[id].map((courseId) =>
    COURSE.find((course) => course.id === courseId)
  );

  res.status(200).json({ courses: enrolledCourses });
};

module.exports = { getCourses, enrollUser, getUserCourses };
