// Setting the survey data to an array of friends objects. Adding one intial default. 
var fixedData = [
  // Potential new BFFs. 
  {
    name: 'Sister Mary Stewart',
    photo: 'https://pixabay.com/get/57e6d7404c5aac14f1dc8460825668204022dfe054517540722a7edc/nun-1623680_640.jpg',
    scores: [1, 1, 1, 1, 1, 5, 5, 1, 5, 5]
  },
  {
    name: 'Tony Stark',
    photo: 'https://pixabay.com/get/52e2d1424854a414f1dc8460825668204022dfe05451754072287cd0/iron-man-4241268_640.jpg',
    scores: [1, 3, 3, 5, 1, 5, 5, 4, 5, 4]
  },
  {
    name: 'Steve Rodgers',
    photo: 'https://pixabay.com/get/52e0d7444a55ab14f1dc8460825668204022dfe05451754072277ad5/captain-america-4027077_640.png',
    scores: [5, 5, 5, 5, 5, 1, 1, 5, 5, 3]
  },
  {
    name: 'I am Groot!',
    photo: 'https://pixabay.com/get/52e1d742495aad14f1dc8460825668204022dfe05451754072277fdd/groot-4121381_640.jpg',
    scores: [5, 3, 3, 5, 2, 2, 3, 4, 5, 2]
  },
  {
    name: 'Peter Parker',
    photo: 'https://pixabay.com/get/52e1d4414950ae14f1dc8460825668204022dfe054517540722773d2/spiderman-4112322_640.jpg',
    scores: [5, 3, 3, 5, 5, 5, 5, 4, 5, 4]
  }
];

// Making the friends data accessible to other files. 
module.exports = fixedData;