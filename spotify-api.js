require('dotenv').config()

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

const SpotifyWebApi = require('spotify-web-api-node')
const spotify_api = new SpotifyWebApi({
    clientid: '4561e903b7db4f5ea09b30842bfa3f67',
    clientSecret: process.env.api_secret,
    redirectUri: 'http://localhost'
})
spotify_api.setAccessToken(process.env.access_token)
// mine is
// 21aamjqllbwgchskywbugsopa
// liked songs playlist
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

module.exports = {
    get_playlist_contents: get_playlist_contents,
    get_playlist_id: get_playlist_id,
    get_playlists: get_playlists
}
