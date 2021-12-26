const mongoose = require("mongoose");
const { Schema } = mongoose;
require("./Car");
require("./Chunk");

const GFSSchema = new Schema(
  {
    _id: String,
    filename: String,
    metadata: {
      type: String,
      ref: "Car",
    },
  },
  { toJSON: { virtuals: true } }
);

GFSSchema.virtual("chunk", {
  ref: "Chunk", // The model to use
  localField: "_id", // Your local field, like a `FOREIGN KEY` in RDS
  foreignField: "files_id", // Your foreign field which `localField` linked to. Like `REFERENCES` in RDS
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
});

const GFS = mongoose.model("GFS", GFSSchema, "fs.files");
module.exports = GFS;
