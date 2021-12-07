const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors')
var session = require("express-session");
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(
    session({
      secret: "2C44-4D44-WppQ38S",
      resave: true,
      saveUninitialized: true,
    })
  );
// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

app.use(cors());

// parse request to body-parser
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});