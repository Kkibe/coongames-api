const mongoose = require("mongoose");
const User = require("./User");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    to: {
        type: String,
    },
    text: {
        type: String
    },
    from: {
        type: Object,
    }

}, {timestamps: true});

module.exports = mongoose.model("Chat", ChatSchema);