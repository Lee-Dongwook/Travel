const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');
const {auth} = require('./middleware/auth');
const {User} = require('./models/User');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected !'))
.catch(err => console.log(err))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    })
}

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});