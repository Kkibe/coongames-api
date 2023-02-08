const router = require('express').Router();
const Game = require('../models/Game');
const {verifyTokenAndAdmin} = require('./verifyToken');

//CREATE A GAME
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newGame = new Game(req.body);
    try{
        const savedGame = await newGame.save();
        res.status(200).json(savedGame);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE A Game
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try{ 
        const updatedGame = Game.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedGame);
    } catch (err) {
        return res.status(500).json(err);
    }
})

//DELETE A Game
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try{
        await Game.findByIdAndDelete(req.params.id);
        res.status(200).json('Game has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET A Game
router.get('/:id', async (req, res) => {
    try{
        const game = await Game.findById(req.params.id);
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get ALL GAMES
router.get('/', async (req, res) => {
    try {
        const games = await Game.find({});
        res.status(200).json(games);
    } catch (e) {
        res.status(500).json(err);
    }
});
module.exports = router;