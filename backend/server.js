// importing the dependencies
const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const usersRouter = require('./routes/users').router;
const costsRouter = require('./routes/costs');

const app = express();
const mongodbURI = process.env.ATLAS_URI;

mongoose.connect(
    mongodbURI,
    {
        retryWrites: true,
        w: "majority",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(function () {
    console.log("DB connected!");
}).catch(function (result) {
    console.log("there was an error with db connection");
})
// const db = mongoose.connection;
// db.on("error", function () {
//     console.log("there was an error with db connection");
// })
// db.once("open", function () {
//     console.log("DB connected!");
// })

// Middlewares
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

// enabling CORS for all requests
app.use(cors());


app.use('/users', usersRouter);
app.use('/costs', costsRouter);

app.get(['/','/testAPI'], (req, res) => {
    console.log("Testing API...");
    res.status(200).json({data: 'Test API'});
})

app.listen(3000, () => {
    console.log("Server running. Listening on port 3000")
});
