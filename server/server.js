// require('newrelic');
const express = require('express');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const path = require('path');
const port = 3001; // process.env.PORT ||
const app = require('./server-app.js');


// app.use(morgan('dev'));

app.listen(port, () => (console.log('reviews microservice running at 127.0.0.1:' + port)));
