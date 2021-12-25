const mongoose = require("mongoose");
require("./Car");
require("./Customer");

const CustomerCar = mongoose.model(
  "CustomerCar",
  new mongoose.Schema({
    customer: { type:  mongoose.Schema.Types.ObjectId, ref: "Customer" },
    car: { type: String, ref: "Car" },
    status: Number,
  }),
  "customer_cars"
);

module.exports = CustomerCar;