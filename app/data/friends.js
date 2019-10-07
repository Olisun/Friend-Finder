// Setting the survey data to an array of friends objects. Adding one intial default. 
var fixedData = [
  // Potential new BFFs. 
  {
    name: 'Sister Mary Stewart',
    photo: 'https://pixabay.com/photos/nun-zombie-possessed-dark-demoniac-1623680/',
    scores: [1, 1, 1, 1, 1, 5, 5, 1, 5, 5]
  },
  {
    name: 'Tony Stark',
    photo: 'https://pixabay.com/photos/iron-man-avengers-marvel-super-hero-4241268/',
    scores: [5, 3, 3, 5, 5, 5, 5, 4, 5, 4]
  },
  {
    name: 'Steve Rodgers',
    photo: 'https://pixabay.com/vectors/captain-america-chris-evans-cap-4027077/',
    scores: [5, 5, 5, 5, 5, 1, 1, 5, 5, 3]
  },
  {
    name: 'I am Groot!',
    photo: 'https://pixabay.com/photos/groot-tree-the-grassland-model-4121381/',
    scores: [5, 3, 3, 5, 2, 2, 3, 4, 5, 2]
  },
  {
    name: 'Peter Parker',
    photo: 'https://pixabay.com/illustrations/spiderman-avengers-endgame-comic-4112322/',
    scores: [5, 3, 3, 5, 5, 5, 5, 4, 5, 4]
  }
];

// Making the friends data accessible to other files. 
module.exports = fixedData;