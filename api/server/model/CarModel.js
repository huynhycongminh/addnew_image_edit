const mongoose = require("mongoose");

const CarModel = mongoose.model(
  "CarModel",
  new mongoose.Schema({
    _id: Number,
    name: String
  }),
  "car_models"
);

module.exports = CarModel;
