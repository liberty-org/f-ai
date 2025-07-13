// Import the express module
const express = require("express");
const cors = require("cors");
const { COURSE } = require("./data/course");
const courseRoutes = require("./routes/courseRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const performanceRoutes = require("./routes/performanceRoutes");

// Create an Express application
const app = express();

// Define the port number to run the server on
const PORT = 5001;

app.use(
  cors({
    origin: "*",
  })
);
// 1. Middleware to parse JSON bodies in requests
app.use(express.json());

app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to the AI LMS Backend API",
  });
});
// Use course routes
// 3. GET route to return a sample list of courses
app.use("/api", courseRoutes);

// Use recommendation routes
app.use("/api", recommendationRoutes);

// Use performance tracking routes
app.use("/api", performanceRoutes);

// 4. Start the Express server and listen on PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
