// 1. get list of playlists that need to be checked
// and function that filters that list
// this can't be a
// for example: "Liked from radio" - last 50 songs
// lastfm top played tracks
//
// 2. update playlist contents
// fetch new contents
// and insert into db
//
// 3. read current and old contents, and create add_songs and remove_songs
// 4. for each playlist in offline_playlists, add(add_songs) and remove(remove_songs)

// The tool to fetch that CSV file is Last.fm to csv or the new version of Last.fm Scrubbler whic

// for now no database, build on promises but read from json files
// the files will be in directory, appended with date
// last_sync_date now will return latest of those files

// file structure
// spotify_playlist_ids for songs specified here
// offline_current contents of offline playlists
// previous states of tracked playlists


//  for now, add them all to the playlist titled offline
// or create a map with source -> destionation, and have
// offline_contents.map(list => list -> "offline")
// have database of name -> spotify_id
// if not present, search on spotify or create new playlist and save id
const api = require('./spotify-api')
// get from database
const old_songs = []

// database.get_playlists
//
// all opreations are on song ids
const spotify_playlists = {
   "Liked from Radio": function (list) { },//get last n from list
                                           //pay attention to order
   "Liked Songs": function (list) { }
}

// this would not work on arrays of numbers
// because in dictionary they are converted to strings
// applies function to dictionary whose elements are lists
// with JSON.parse "[" +.. + ] it would work
function apply_functions(dict) {
   return Object.keys(dict)
      .map(key => {
         const fun = dict[key]
         // these are ids therefore no commas
         return fun(key.split(",")) //town
      })
}

function map_keys(dict, fun) {
   // map function  on all keys
}
// apply_functions(spotify_playlists)
//   .map(api.get_playlist_songs())

const other_playlists = [
    // here will be functions
    ""
]
// destination playlists
const playlist_sources = spotify_playlists + other_playlists
Promise.all(playlist_sources).then(sources => {
   //...
})

module.exports = {
   apply_functions: apply_functions
}
