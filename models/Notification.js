const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    link: {
        type: String,
    }

}, {timestamps: true});

module.exports = mongoose.model("Notification", NotificationSchema);