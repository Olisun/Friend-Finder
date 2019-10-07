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
    console.log(surveyScores[4]);

    // Setting the bffIndex value and the defaultBeta value as starting points. 
    var bffIndex = 0;
    var defaultBeta = 100;
    // First for-loop loops over all the arrays in friends. 
    for (var i = 0; i < fixedData.length; i++) {
      console.log(fixedData[i].scores);
      // Setting a counter equal to 0. 
      var accumulator = 0;
      // Second four-loop compares the absolute difference in scores between every array in friends vs. the user's score and added the total difference to the accumulator. 
      for (var j = 0; j < fixedData[i].scores.length; j++) {
        var beta = (Math.abs(surveyScores[j] - fixedData[i].scores[j]));
        accumulator += beta;
      };
      // If the accumulator score is less than the default beta, the default beta becomes the accumulator. Basucally this sets up the comparison loop to go from one friend to the other comparing against the user's score. 
      if (accumulator < defaultBeta) {
        bffIndex = i;
        defaultBeta = accumulator;
      };
    };
    // This takes the user's scores fro the survey and pushes them into the fixed data array in friends after being parseInt'd. 
    fixedData.push(request.body);
    // T'eeing up the the fixedData friend to be sent back to the DOM in the modal. 
    var yourNewBff = fixedData[bffIndex];
    console.log(yourNewBff);
    // This sernds the fixedData name with the closest match back to survey.html.
    response.json(yourNewBff);
  })
}