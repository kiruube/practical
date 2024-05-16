//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})
require('dotenv') = config();

//Instantiation
const app = express();
const port = 3009;

//import Model
const AdminRegister = require('./models/AdminRegister');

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

app.use(expressSession);
app.use(passport.initialize())
app.use(passport.session());

passport.use(AdminRegister.createStrategy());
passport.serializeUser(AdminRegister.serializeUser());
passport.deserializeUser(AdminRegister.deserializeUser());
//routes


//Invalid Routes
app.get('*', (res,req) => {
    res.send('404! This page does not exist..')
});

//bootstrapping
app.listen(port, () => console.log(`Listening on ${port}`));