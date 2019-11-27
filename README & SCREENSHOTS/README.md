# LIRI NODE APP

*Be sure to run 'npm i' before using the application to get the required packages!*

This application is designed to take in the following specific commands and return a result to the console:

* 'concert-this'
* 'spotify-this-song'
* 'movie-this'
* 'do-what-it-says'


### 'concert-this'
This command accepts an artist name, and should return their soonest event in the following format:

* Venue Name
* Venue Location
* Event Date


### 'spotify-this'
This command accepts any song name, and should return details about the song (from the Spotify API) in the following format:

* Artist
* Song Name
* Song Preview (link)
* Song's Album


### 'movie-this'
This command accepts any movie name, and should return details about the movie in the following format:

* Movie Title
* Release Year
* IMDB Rating
* Rotten Tomatoes Rating
* Country of Production
* Language
* Movie Plot
* Cast


### 'do-what-it-says'
This command is designed to execute a random command from the 'random.txt' file.
Any desired command **MUST** be entered into the 'random.txt' file using the following format: 

*command-name*,**"An Artist/A Song/A Movie"**

After the command, enter a single comma followed by the query in quotations. **(no space after comma)**