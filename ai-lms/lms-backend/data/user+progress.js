// In-memory store for user progress
const userProgress = {}; // { userId: [ { courseId, quizScores, timeSpent, completedModules, timestamp } ] }

module.exports = { userProgress };
