const spotify_api = require('./set-up-api')
const auth = require('spotify-auth-node')

function authorize() {
    return auth.getAccessToken()
        .then(token => {
            spotify_api.setAccessToken(token)
        })
        .then(() => {
            if (!spotify_api.getAccessToken())
            throw "token not set"
        })
}

function get_last_tracks(playlist_id, limit = 100, saved_tracks) {
    return authorize().then(() => {
        if (saved_tracks) {
            return spotify_api.getMySavedTracks({
                limit: limit
            })
        }
        else
            return spotify_api.getPlaylistTracks(playlist_id, {
                limit: limit
            })
    }).then(result => get_ids(result.body.items))
}

// TODO test these
function add_songs(playlist_id, song_ids) {
    return authorize()
        .then(() =>
            spotify_api.addTracksToPlaylist(playlist_id, song_ids.map(transform_id))
        )
}

function remove_songs(playlist_id, song_ids) {
    // this might need changing (without transform)
    return authorize()
        .then(() =>
            spotify_api.removeTracksFromPlaylist(playlist_id, song_ids.map(transform_id))
        )
}

function transform_id(id) {
    return `spotify:track:${id}`
}

function get_ids(songs) {
    return songs.map(song => { return song.track.id })
}
module.exports = {
    get_last_tracks: get_last_tracks,
    add_songs: add_songs,
    remove_songs: remove_songs
}
