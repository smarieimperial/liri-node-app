require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

var request = require('request');
request('http://http://www.omdbapi.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var Spotify = require('node-spotify-api');
 
var Spotify = new Spotify({
  id: '5adf649fd904497a9a83cbeaf258faeb',
  secret: '265404a69244407d9919e6b99cc61ab8',
});
 
spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
//   10. Make it so liri.js can take in one of the following commands:

//     * `spotify-this-song`

//     * `movie-this`

//     * `do-what-it-says`

// ### What Each Command Should Do

// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
