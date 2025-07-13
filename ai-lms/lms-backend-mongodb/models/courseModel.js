const mongoose = require("mongoose");
const { courseCollection } = require("../constant");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
  },
  {
    collection: courseCollection,
  }
);

module.exports = mongoose.model("Course", courseSchema);
