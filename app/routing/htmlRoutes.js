// Establishing dependancies. 
var path = require('path');

// Routing - HTML Get requests directs the user to the various pages. 
module.exports = function(app) {
  // A get route to survey.html that displays the survey page.
  app.get('/survey', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/survey.html'));
  });
  // This defaults the user to home.html if no matching route is found. 
  app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/home.html'));
  });
}