const mongoose = require("mongoose");
require("./CarModel");
require("./CarDetail");
require("./GFS");

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    _id: String,
    name: String,
    year: Date,
    image: {
      type: String,
      ref: "GFS",
    },
    prices: String,
    number: Number,
    node: String,
    car_detail: {
      type: String,
      ref: "CarDetail",
    },
    car_model: {
      type: String,
      ref: "CarModel",
    }
  })
);

module.exports = Car;