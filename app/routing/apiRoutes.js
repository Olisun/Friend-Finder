// Setting the dependancies and api routes. 
var path = require('path');
var userData = require('../data/friends');

// Setting up the api functions to be exported. 
module.exports = function(app) {
  // Setting up a GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(request, response) {
    response.json(newUserData);
  });

  // Setting up POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(request, response) {
    console.log(newUserData);
  })
}