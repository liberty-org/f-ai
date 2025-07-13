// Controller for AI-based recommendations
const { COURSE } = require("../data/course");

// Serve AI-based recommendations based on user interest
const getRecommendations = (req, res) => {
  const { interest } = req.query;

  if (!interest) {
    return res.status(400).json({ error: "Missing interest query parameter" });
  }

  // Dummy logic for recommendations based on interest
  const recommendations = COURSE.filter((course) =>
    course.name.toLowerCase().includes(interest.toLowerCase())
  );

  res.status(200).json({ recommendations });
};

module.exports = { getRecommendations };
