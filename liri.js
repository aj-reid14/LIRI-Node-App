require("dotenv").config();
const axios = require("axios");
const Spotify = require("node-spotify-api");
const moment = require("moment");
moment().format();

let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);


let action = process.argv[2];
let search = process.argv.slice(3);

switch (action) {
    case "concert-this":
        ConcertThis(search.join("+"));
        break;
    case "spotify-this-song":
        SpotifyThisSong(search.join(" "));
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

    if (!event) {
        console.log("No Results");
    } else {
        console.log(event.artist.name);
        console.log(`Venue: ${event.venue.name}`);
        console.log(`Location: ${event.venue.city}, ${event.venue.region}`);

        let date = moment(event.datetime).format('MM/DD/YYYY');
        console.log(`Date: ${date}`);
    }

    console.log('------------------------------');
    });

}

function SpotifyThisSong(q) {

    spotify.search({type: 'track', query: q}, function(err, data) {
        if (err) {
            return console.log("Error Occured: " + err);
        }

        let song = data.tracks.items[0];

        console.log('------------------------------');

        if (!song) {
            console.log("No Results");
        } else {

            console.log(`Artist: ${song.artists[0].name}`);
            console.log(`'${song.name}'`);
            console.log(`Preview: ${song.external_urls.spotify}`);
            console.log(`Album: ${song.album.name}`);
        }

        console.log('------------------------------');

    });

}

function MovieThis() {

}

function DoWhatItSays() {

}