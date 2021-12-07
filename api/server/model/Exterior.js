const mongoose = require("mongoose");

const Exterior = mongoose.model(
  "Exterior",
  new mongoose.Schema({
    _id: Number,
    headlight: String,
    parking_light: String,
    daylight: String,
  })
);

module.exports = Exterior;
