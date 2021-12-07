const { Schema } = require("mongoose");
const mongoose = require("mongoose");
require("../model/Customer");
require("../model/CarModel");

const CustomerCarModel = mongoose.model(
  "CustomerCarModel",
  new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    car_model: { type: Number, ref: "CarModel" },
  }),
  "customer_car_models"
);

module.exports = CustomerCarModel;