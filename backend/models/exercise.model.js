const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exersiceSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Exersice = mongoose.model("Exersice", exersiceSchema);
module.exports = Exersice;
