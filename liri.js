require("dotenv").config();
const axios = require("axios");
const Spotify = require("node-spotify-api");
const moment = require("moment");
moment().format();

let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);


let action = process.argv[2];
let search = process.argv.slice(3);

console.log(action);
console.log(search);

switch (action) {
    case "concert-this":
        ConcertThis(search.join("+"));
        break;
    case "spotify-this-song":
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
}

function ConcertThis(q) {

    axios.get(`https://rest.bandsintown.com/artists/${q}/events?app_id=codingbootcamp`).then(function(response) {

    let event = response.data[0];

    console.log('------------------------------');

    if (event) {
        console.log(event.artist.name);
        console.log(`Venue: ${event.venue.name}`);
        console.log(`Location: ${event.venue.city}, ${event.venue.region}`);

        let date = moment(event.datetime).format('MM/DD/YYYY');
        console.log(`Date: ${date}`);
    } else {
        console.log("No Results");
    }

    console.log('------------------------------');
    });

}

function SpotifyThisSong() {

}

function MovieThis() {

}

function DoWhatItSays() {

}