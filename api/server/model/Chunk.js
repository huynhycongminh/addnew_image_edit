const mongoose = require("mongoose");
require("./GFS");

const Chunk = mongoose.model(
  "Chunk",
  new mongoose.Schema({
    filename_id: {
      type: String,
      ref: "GFS",
    },
    data: Buffer,
  }),
  "fs.chunks"
);

module.exports = Chunk;
