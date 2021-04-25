/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('combined'));

// mongodb connection
connectDB();
 
// parse request to body-parser
app.use(express.urlencoded({ extended : true}))

// set view engine
app.set('view engine', 'ejs')
//app.set("views", path.resolve(__dirname,'views/ejs"))

// load assets
// eslint-disable-next-line no-undef
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// load routers 
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});