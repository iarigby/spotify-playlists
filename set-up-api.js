require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')
const spotify_api = new SpotifyWebApi({
    clientid: '4561e903b7db4f5ea09b30842bfa3f67',
    clientSecret: process.env.api_secret,
    redirectUri: 'http://localhost:8888/callback'
})
spotify_api.setAccessToken(process.env.access_token)
// TODO find a better way to handle token refresh (maybe read/write from file)
//  which makes deleting the untracked "database" file a bit stupid
//  spotify_api.refreshAccessToken().then(data => console.log(data.body['access_token']))
module.exports = spotify_api
