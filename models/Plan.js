const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    //can only be monthly and weekly
    name: {
        type: String,
        enum: ["free", "basic", "pro"],
        default: "free",
        //enum: ['weekly', 'monthly', 'yearly]
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
    }

}, {timestamps: true});

module.exports = mongoose.model("Plan", PlanSchema);