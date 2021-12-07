const mongoose = require("mongoose");

const AdminLogin = mongoose.model(
  "AdminLogin",
  new mongoose.Schema({
    _id: Number,
    username: String,
    password: String
  }),
  "admin_login"
);

module.exports = AdminLogin;
