const spotify_api = require('./set-up-api')
function get_playlist_id(song_name) {
    return new Promise()
}

function get_playlist_contents(playlist_id) {
    return new Promise((resolve, reject) => {
        if(playlist_id) {
            resolve(["song1", "song2"])
        } else {
            reject(Error("error"))
        }
    })
}

// mine is
// 21aamjqllbwgchskywbugsopa
// liked from radio playlist
// 7kGIhqEo5HGYTlFFeIi1j7
function get_playlists(user_id) {
    spotify_api.getUserPlaylists(user_id).then(
        function(data) {
            console.log(data.body)
        },
        function(err) {
            console.log(err)
        }
    )
}

function get_last_tracks(playlist_id, limit=100) {
    return spotify_api.getPlaylistTracks(playlist_id, {
        limit: limit
    })
}
module.exports = {
    get_playlist_contents: get_playlist_contents,
    get_playlist_id: get_playlist_id,
    get_playlists: get_playlists,
    get_last_tracks: get_last_tracks
}
