// Setting the survey data to an array of friends objects. Adding one intial default. 
var friends = [{
    name: 'Taylor Sun',
    photo: 'https://pixabay.com/photos/nun-zombie-possessed-dark-demoniac-1623680/',
    scores: [3, 3, 3, 3, 3, 5, 5, 4, 5, 4]
  },
  {
    name: 'Taylor Sun',
    photo: 'https://pixabay.com/photos/nun-zombie-possessed-dark-demoniac-1623680/',
    scores: [3, 3, 3, 3, 3, 5, 5, 4, 5, 4]
  }
];

// Making the friends data accessible to other files. 
module.exports = friends;


function calculateSum(...arguments) {
  console.log(arguments.length)
}

calculateSum(3, 3, 3, 3, 3, 5, 5, 4, 5, 4, 4)

function calculateSum(...arguments) {
  let accumulator = 0;
  for (let i = 0; i < arguments.length; i++) {
    accumulator += arguments[i];
  };
  return accumulator;
};

calculate(3, 3, 3, 3, 3, 5, 5, 4, 5, 4, 4)

function calculateAverage(...arguments) {
  let accumulator = 0;
  for (let i = 0; i < arguments.length; i++) {
    accumulator += arguments[i];
  };
  return accumulator / arguments.length;
};

calculateAverage(3, 3, 3, 3, 3, 5, 5, 4, 5, 4, 4)