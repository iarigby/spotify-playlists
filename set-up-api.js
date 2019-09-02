require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')
const spotify_api = new SpotifyWebApi({
    clientid: '4561e903b7db4f5ea09b30842bfa3f67',
    clientSecret: process.env.api_secret,
    redirectUri: 'http://localhost'
})
spotify_api.setAccessToken(process.env.access_token)
// spotify_api.refreshAccessToken().then(data => console.log(data.body['access_token']))
module.exports = spotify_api
