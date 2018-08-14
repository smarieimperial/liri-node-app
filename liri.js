require("dotenv").config();

// 9. Add the code required to import the `keys.js` file and store it in a variable.
require("/keys.js").config();
var m = require('./keys.js');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

var request = require('request');

request('http://www.omdbapi.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '5adf649fd904497a9a83cbeaf258faeb',
  secret: '265404a69244407d9919e6b99cc61ab8',
});
 
spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var fs = require("fs");

fs.readFile("random.txt"), utf8, function(error, data) {
    if (error) {
        return console.log(error);
      }

      console.log(data);

      var dataArr = data.split(",");

      console.log(dataArr);
}

request("http://www.omdbapi.com", function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log(body);
  }
});



