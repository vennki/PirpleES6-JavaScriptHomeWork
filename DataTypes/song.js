/*
Title of the file: song.js
Description: This is a javascript file to output the details of my favorite song to the console and thereby demonstrate the usage of various data types in javascript
Author: Venkata Lanka
Date: 30th December 2018
*/

// Variable Declaration

// Name of the song
var name = "Maa Tujhe Salam";

// Album of the song
var album = "Vande Mataram";

// Artist of the song
var artist = "AR Rahman";

// Duration of the song in seconds
var durationInSeconds = 371;

// Lyric writer of the song
var lyricWriter = "Mehboob";

// Genre of the song
var genre = "Patriotic"

// Year of the song
var year = 1997;

// Is it a hit song
var isAHitSong = true;

// Backing Vocals for the song
var backingVocals = ["Rita Campbell", "Deepika Thathaal", "Joy Rose", "Chris Ballin", "Sophia James"];

// Percussion for the song
var percussion = "Peter Lockett";

// Guitar for the song
var guitar = "Mark James";

// Video Editing for the song
var videoEditing = "Chetan Desai";

/* Constructor for creating a song object which accepts various below attributes of the song
    1. name - Name of the song (string)
    2. album - Album of the song (string)
    3. artist - Artist of the song (string)
    4. durationInSeconds - Duration of the song in seconds (number)
    5. lyricWriter - Lyric Writer of the song (string)
    6. genre - Genre of the song (string)
    7. year - Year of the song (number)
    8. isAHitSong - Is A Hit Song or not (Boolean value)
    9. backingVocals = Backing Vocals for the song (Array)
    10. percussion - Percussion for the song (string)
    11. guitar - Guitar for the song (string)
    12. videoEditing - Video Editing for the song (string)
*/
function songDetails(name, album, artist, durationInSeconds, lyricWriter, genre, year, isAHitSong, backingVocals, percussion, guitar, videoEditing){
    this.name = name;
    this.album = album;
    this.artist = artist;
    this.durationInSeconds = durationInSeconds;
    this.lyricWriter = lyricWriter;
    this.genre = genre;
    this.year = year;
    this.isAHitSong = isAHitSong;
    this.backingVocals = backingVocals;
    this.percussion = percussion;
    this.guitar = guitar;
    this.videoEditing = videoEditing;
    this.showName = function(){
        console.log("Name of the song is: " + this.name);
    };
    this.showAlbum = function(){
        console.log("Album of the song is: " + this.album);
    };
    this.showArtist = function(){
        console.log("Artist of the song is: " + this.artist);
    };
    this.showDurationInSeconds = function(){
        console.log("Duration of the song in seconds is: " + this.durationInSeconds);
    };
    this.showLyricWriter = function(){
        console.log("Lyric Writer of the song is: " + this.lyricWriter);
    };
    this.showGenre = function(){
        console.log("Genre of the song is: " + this.genre);
    };
    this.showYear = function(){
        console.log("Year of the song is: " + this.year);
    };
    this.showIsAHitSong = function(){
        if(this.isAHitSong === true){
            console.log("This is a hit song");
        }
        else{
            console.log("This is a flop song");
        }
    };
    this.showBackingVocalsBy = function(){
        console.log("Backing Vocals by: " + this.backingVocals.join(", "));
    };
    this.showPercussionBy = function(){
        console.log("Percussion By: " + this.percussion);
    };
    this.showGuitarBy = function(){
        console.log("Guitar By: " + this.guitar);
    };
    this.showVideoEditingBy = function(){
        console.log("Video Editing By: " + this.videoEditing);
    };
}

// create a favSong object by calling the constructor and passing the relevant values
var favSong = new songDetails(name, album, artist, durationInSeconds, lyricWriter, genre, year, isAHitSong, backingVocals, percussion, guitar, videoEditing);

// calling the respective methods to show the needed details of the song
favSong.showName();
favSong.showAlbum();
favSong.showArtist();
favSong.showDurationInSeconds();
favSong.showLyricWriter();
favSong.showGenre();
favSong.showYear();
favSong.showIsAHitSong();
favSong.showBackingVocalsBy();
favSong.showPercussionBy();
favSong.showGuitarBy();
favSong.showVideoEditingBy();