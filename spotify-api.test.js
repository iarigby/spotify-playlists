const api = require('./spotify-api')

it('learn to use promises', () => {
    expect.assertions(1)
    return expect(api.get_playlist_contents(true)).resolves.toEqual(["song1", "song2"])
})

it('handle exception', () => {
    expect.assertions(1)
    api.get_playlists('21aamjqllbwgchskywbugsopa')
   return api.get_playlist_contents(false).catch(e => {
        expect(e).toEqual(Error("error"))
    })
})

const SpotifyWebApi = require('spotify-web-api-node')
const spotify_api = new SpotifyWebApi({
    clientid: '4561e903b7db4f5ea09b30842bfa3f67',
    clientSecret: process.env.api_secret,
    redirectUri: 'http://localhost'
})
/**
 * handling limits
 * while returned array is not emtpy
 * see what happens when offest is crossed
 * might need to do settimeout here as well, or wait for the response
 * to finish before continuing offest and build
 * array of tracks
 * */
spotify_api.setAccessToken(process.env.access_token)
it('get user playlists', () => {
    //expect.assertions(1)
    // here need to modify offest and limit on each time
    spotify_api.getPlaylistTracks('7kGIhqEo5HGYTlFFeIi1j7').then(
        function(data) {
            for (item of data.body.items) {
                console.log(item.track.name)
            }
            expect(true).teEqual(true)
        },
        function(err) {
            console.log(err)
            expect(true).teEqual(true)
        }
    )
})
// http://localhost/?code=AQAuqiA-6seNum3lype4dYLlHSJ0TKXATBXsQuGH4W87i2fQuQ-IQCN587YaVZRmvzUWvk5W5nWlfAeDT2CmIBB50UI5RPmYefruZpbLSt0COPQWMe5tDk_NqpECtD1sP0AY-qdR2VgxCGfl81pYidN8Drc959PteSMzAXtJIZ6LhVSTp1s4ig
// AQAuqiA-6seNum3lype4dYLlHSJ0TKXATBXsQuGH4W87i2fQuQ-IQCN587YaVZRmvzUWvk5W5nWlfAeDT2CmIBB50UI5RPmYefruZpbLSt0COPQWMe5tDk_NqpECtD1sP0AY-qdR2VgxCGfl81pYidN8Drc959PteSMzAXtJIZ6LhVSTp1s4i
