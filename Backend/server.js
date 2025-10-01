if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//import express stuff

const express = require('express'); // import express from the express library
const app = express(); // call the app version of that
const expressLayouts = require('express-ejs-layouts'); // import express layouts

// routers

const indexRouter = require('./routes/index');

// mongodb 

const mongoose = require('mongoose');

// -----------------------------------------------------------------------------------------------

// setup and using express

app.set("view engine", "ejs"); // set the view engine
app.set("views", __dirname + '/views'); // set the folder to store server-rendered views
app.set('layout', 'layouts/layout'); // Set which folder the layouts are gonna be in
app.use(expressLayouts); // Tell express we're gonna use express layouts
app.use(express.static('public')); // set folder for all our public views

// -----------------------------------------------------------------------------------------------

// routers

app.use('/', indexRouter);

// Mongodb

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser : true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Connected to mongoose"));

// set port

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});

// -----------------------------------------------------------------------------------------------


