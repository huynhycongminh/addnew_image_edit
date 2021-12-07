const mongoose = require("mongoose");

const EngineTransmission = mongoose.model(
  "EngineTransmission",
  new mongoose.Schema({
    _id: Number,
    engine: String,
    transmission: String,
    cylinder_capacity: String,
    maximum_power: String,
    maximum_speed: String,
  }),
  "engine_transmissions"
);

module.exports = EngineTransmission;
