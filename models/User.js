const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      required: false,
    },
    subscription: {
      type: String,
      default: "free"
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    followers: {
      type: Array,
    },
    following: {
      type: Array,
    },
    gamesInProgress: {
      type: Array,
      default:[],
    },
    socialLinks: {
      type: Array,
      default: [],
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
