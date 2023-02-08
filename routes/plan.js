const express = require("express");
const router = express.Router();
const {verifyTokenAndAdmin} = require('./verifyToken');
const Plan = require("../models/Plan");

router.post("/create",verifyTokenAndAdmin, async(req, res) => {
    const newPlan = new Post(req.body);
    try{
        const savedPlan = await newPlan.save();
        res.status(200).json(savedPlan);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async(req, res) => {
    try {
        const plans = await Plan.find({});
        res.status(200).json(plans);
    } catch (e) {
        res.status(500).json(err);
    }
});


module.exports = router;