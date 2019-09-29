require('dotenv').config()
const auth = require('spotify-auth-node')

const SpotifyWebApi = require('spotify-web-api-node')
const spotify_api = new SpotifyWebApi({
    clientid: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:8888/callback'
})

auth.getAccessToken(token => 
    spotify_api.setAccessToken(token))
    
module.exports = spotify_api
