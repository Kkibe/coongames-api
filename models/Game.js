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
    levels: {
      type: Number,
      default: 1,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    reviews: {
      type: Object,
      default:{
        username: String,
        review: String,
        stars: Number
      }
    },
    publisher: {
      type: String,
      required: true,
    },
    downloads: {
      type: Number,
      default: 0,
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
