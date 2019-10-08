// Establishing dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setting express configuration. 
var app = express();

// Setting an initial port. 
var PORT = process.env.PORT || 3000;

// Setting up the express app to handle static data. 
app.use(express.static(__dirname + '/app/public'));

// Setting up body-parser as middle-ware which interprets the data sent to the server.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.custom-type' }))

// Setting up the router which points the server to a series of route files. The routes lets the server know how to response when users visit or request data from the various URLs.

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starting the server. 

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
})