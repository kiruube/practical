//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv') = config();
//Instantiation
const app = express();
const port = 3009;

//Middleware
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
});
mongoose.connection
.once('open', () => {
    console.log('Mongoose connected Succesfully');
})
.on('error', err => {
    console.log(`Connection error: ${err.message}`);
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//configuration
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//routes


//Invalid Routes
app.get('*', (res,req) => {
    res.send('404! This page does not exist..')
});

//bootstrapping
app.listen(port, () => console.log(`Listening on ${port}`));