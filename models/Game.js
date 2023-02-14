const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false
    },
    premium: {
      type: Boolean,
      required: false,
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Game", GameSchema);