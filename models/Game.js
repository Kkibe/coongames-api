const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    url: {
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
