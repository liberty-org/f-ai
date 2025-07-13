// Router for performance tracking
const express = require("express");
const {
  trackProgress,
  getUserProgress,
} = require("../controllers/performanceController");

const router = express.Router();

// Route to track user progress
router.post("/track-progress", trackProgress);

// Route to get user progress
router.get("/user/:userId/progress", getUserProgress);

module.exports = router;
