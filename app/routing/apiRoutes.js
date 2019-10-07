// Setting the dependancies and api routes. 
var path = require('path');
var fixedData = require('../data/friends');

// Setting up the api functions to be exported. 
module.exports = function(app) {
  // Setting up a GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(request, response) {
    response.json(fixedData);
  });

  // Setting up POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(request, response) {
    var survey = request.body;
    var surveyScores = request.body.scores;
    // Must convert survey scores to numbers. 
    for (var i = 0; i < surveyScores.length; i++) {
      surveyScores[i] = parseInt(surveyScores[i]);
    };

    console.log(surveyScores);
    // Setting the index value and the defaultBeta value as starting points. 
    var index = 0;
    var defaultBeta = 100;


    //
    for (var i = 0; i < fixedData.length; i++) {
      console.log(fixedData[i].scores);
      var beta = 0;
      for (var j = 0; j < fixedData[i].scores.length; j++) {
        var beta = (Math.abs(surveyScores[j] - fixedData[i].scores[j]));
        defaultBeta += beta;
      };
    };
    //
    if (beta < defaultBeta) {
      index = i;
      defaultBeta = beta;
    }
    //
    fixedData.push(request.body);
    //
    response.json(fixedData[index])
  })
}