const mongoose = require("mongoose");

const Furniture = mongoose.model(
  "Furniture",
  new mongoose.Schema({
    _id: String,
    steering_wheel: String,
    display: String,
    technology: String,
    sound_connect: String,
    equipment: String,
  }),
  "furniture"
);

module.exports = Furniture;
