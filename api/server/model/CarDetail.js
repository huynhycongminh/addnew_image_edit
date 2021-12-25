const mongoose = require("mongoose");
require('./Furniture');
require('./Exterior');
require('./EngineTransmission');
require('./SizeVolume');

const CarDetail = mongoose.model(
  "CarDetail",
  new mongoose.Schema({
    _id: String,
    size_volume: {
      type: String,
      ref: "SizeVolume",
    },
    engine_transmission: {
      type: String,
      ref: "EngineTransmission",
    },
    furniture: {
      type: String,
      ref: "Furniture",
    },
    exterior: {
      type: String,
      ref: "Exterior",
    },
  }),
  "car_details"
);

module.exports = CarDetail;


