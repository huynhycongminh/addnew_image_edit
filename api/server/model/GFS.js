const mongoose = require("mongoose");
const GFS = mongoose.model("GFS", new mongoose.Schema({_id: String, filename: String}, {strict: false}), "fs.files" );

module.exports = GFS;