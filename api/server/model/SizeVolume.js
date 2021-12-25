const mongoose = require("mongoose");

const SizeVolume = mongoose.model(
  "SizeVolume",
  new mongoose.Schema({
    _id: String,
    length: String,
    width: String,
    height: String,
    standard_long: String,
    weight: String,
  }),
  "size_volumes"
);

module.exports = SizeVolume;
