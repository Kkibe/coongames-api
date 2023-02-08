const router = require('express').Router();
const Subscription = require('../models/Subscription');
const {verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken} = require('./verifyToken');

//CREATE Subscription
router.post('/', verifyToken, async (req, res) => {
    const newSubscription  = new Subscription(req.body);
    try{
        const savedSubscription  = await newSubscription.save();
        res.status(200).json(savedSubscription );

    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE Subscription 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try{ 
        const updatedSubscription  = Subscription.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedSubscription );
    } catch (err) {
        return res.status(500).json(err);
    }
})

//DELETE Subscription 
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try{
        await Subscription.findByIdAndDelete(req.params.id);
        res.status(200).json('Subscription has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET USER Subscription 
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try{
        const subscription  = await Subscription.findOne({userId: req.params.userId});
        res.status(200).json(subscription );
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL Subscription 
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try{
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;