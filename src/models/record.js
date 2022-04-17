const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Activity name should contains at least 3 chars"],
  },
  date: { type: Date },
  type: { type: String },
  duration: { type: Number, min: [0, "Duration must be at least 0"] },
  description: { type: String },
  timestamp: { type: Date },
});

const RecordModel = mongoose.model("Record", recordSchema, "records");

module.exports = RecordModel;
