const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name:String,
    phoneNumber: String,
    email: String,
    address: String,
    note: String,
  })
);

module.exports = Customer;
