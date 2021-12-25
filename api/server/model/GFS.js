const mongoose = require("mongoose");
require("./Car");

const GFS = mongoose.model(
  "GFS",
  new mongoose.Schema(
    {
      _id: String,
      filename: String,
      metadata: {
        type: String,
        ref: "Car",
      },
    },
    { strict: false }
  ),
  "fs.files"
);

module.exports = GFS;
