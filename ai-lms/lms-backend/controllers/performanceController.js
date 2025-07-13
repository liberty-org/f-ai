// Controller for tracking user performance
// Import in-memory store for user progress
const { userProgress } = require("../data/user+progress"); // { userId: [ { courseId, quizScores, timeSpent, completedModules, timestamp } ] }

// Track progress: quiz scores, time spent, completed modules
const trackProgress = (req, res) => {
  const { userId, courseId, quizScores, timeSpent, completedModules } =
    req.body;

  if (!userId || !courseId) {
    return res.status(400).json({ error: "Missing userId or courseId" });
  }

  // Initialize user progress array if not exists
  if (!userProgress[userId]) {
    userProgress[userId] = [];
  }

  // Create a progress record
  const progressRecord = {
    courseId,
    quizScores: quizScores || [], // array of numbers
    timeSpent: timeSpent || 0, // in minutes
    completedModules: completedModules || [], // array of module identifiers
    timestamp: new Date().toISOString(),
  };

  // Add or update progress for this course
  const existingIndex = userProgress[userId].findIndex(
    (rec) => rec.courseId === courseId
  );
  if (existingIndex !== -1) {
    userProgress[userId][existingIndex] = progressRecord;
  } else {
    userProgress[userId].push(progressRecord);
  }

  res
    .status(200)
    .json({
      message: "Progress tracked successfully",
      progress: userProgress[userId],
    });
};

// Optional: get user progress
const getUserProgress = (req, res) => {
  const { userId } = req.params;
  if (!userProgress[userId]) {
    return res.status(404).json({ error: "No progress found for this user" });
  }
  res.status(200).json({ progress: userProgress[userId] });
};

module.exports = { trackProgress, getUserProgress };
