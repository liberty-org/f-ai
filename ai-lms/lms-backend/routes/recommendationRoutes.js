// Router for AI-based recommendations
const express = require("express");
const {
  getRecommendations,
} = require("../controllers/recommendationController");

const router = express.Router();

// Route to serve AI-based recommendations
router.get("/recommend", getRecommendations);

module.exports = router;
