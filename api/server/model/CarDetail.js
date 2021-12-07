const mongoose = require("mongoose");
require('./Furniture');
require('./Exterior');
require('./EngineTransmission');
require('./SizeVolume');

const CarDetail = mongoose.model(
  "CarDetail",
  new mongoose.Schema({
    _id: Number,
    size_volume: {
      type: Number,
      ref: "SizeVolume",
    },
    engine_transmission: {
      type: Number,
      ref: "EngineTransmission",
    },
    furniture: {
      type: Number,
      ref: "Furniture",
    },
    exterior: {
      type: Number,
      ref: "Exterior",
    },
  }),
  "car_details"
);

module.exports = CarDetail;


