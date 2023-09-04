const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    name: {
        type: String,
        enum: ["free", "basic", "pro"],
        default: "free",
    },
    price: {
        type: Number
    },
    desc: {
        type: Array
    },
    hasTrial: {
        type: Boolean,
        default: false,
        duration: 86400
    },
    coupon: {
        type: Number
    },
    features: {
        type: Array
    }

}, {timestamps: true});

module.exports = mongoose.model("Plan", PlanSchema);