// Router for managing courses and learners
const express = require("express");
const {
  getCourses,
  enrollUser,
  getUserCourses,
} = require("../controllers/courseController");

const router = express.Router();

// Route to fetch all available courses
router.get("/courses", getCourses);

// Route to enroll a user in a course
router.post("/enroll", enrollUser);

// Route to view user progress
router.get("/user/:id/courses", getUserCourses);

module.exports = router;
