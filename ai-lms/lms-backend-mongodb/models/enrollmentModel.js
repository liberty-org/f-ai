const mongoose = require("mongoose");
const { enrollmentCollection } = require("../constant");

const enrollmentSchema = new mongoose.Schema(
  {
    studentName: String,
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    enrollmentDate: { type: Date, default: Date.now },
  },
  {
    collection: enrollmentCollection,
  }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);
