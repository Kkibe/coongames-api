const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const app = express();
const cors = require('cors');
dotenv.config();

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const gameRoute = require('./routes/game');
const postRoute = require("./routes/post");
const uploadImageRoute = require("./routes/uploadImage");
const uploadGameRoute = require("./routes/uploadGame");
const payRoute = require('./routes/stripe');
const planRoute = require('./routes/plan');
const subscriptionRoute = require('./routes/subscription');
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use('/pages', express.static(__dirname + '/pages'));
app.use('/images', express.static(__dirname + '/images'));
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(express.static("public"));


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error); 
  });


app.get('/api/games/:id', (req, res) => {
    res.render('youtube-downloader/index')
})

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/games', gameRoute);
app.use("/api/posts", postRoute);
app.use("/api/upload/image", uploadImageRoute);
app.use("/api/upload/game", uploadGameRoute);
app.use('/api/checkout', payRoute);
app.use('/api/subscriptions', subscriptionRoute);
app.use('/api/plans', planRoute);

app.listen(PORT, hostname, () => {
    console.log(`Server is running on http://${hostname}:${PORT}/`)
})