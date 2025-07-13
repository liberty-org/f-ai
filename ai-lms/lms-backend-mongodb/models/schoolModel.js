const mongoose = require("mongoose");
const { schoolCollection } = require("../constant");

const schoolSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    established: Number,
  },
  {
    collection: schoolCollection,
  }
);

module.exports = mongoose.model("School", schoolSchema);
