const mongoose = require("mongoose");
require("./CarModel");
require("./CarDetail");
const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    _id: Number,
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
      type: Number,
      ref: "CarDetail",
    },
    car_model: {
      type: Number,
      ref: "CarModel",
    },
  })
);

module.exports = Car;