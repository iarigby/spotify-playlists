const api = require('./spotify-api')
const spotify_api = require('./set-up-api')
it('learn to use promises', () => {
    expect.assertions(1)
    return expect(api.get_playlist_contents(true)).resolves.toEqual(["song1", "song2"])
})

it('handle exception', () => {
    expect.assertions(1)
    return api.get_playlist_contents(false).catch(e => {
        expect(e).toEqual(Error("error"))
    })
})

/**
 * handling limits
 * while returned array is not emtpy
 * see what happens when offest is crossed
 * might need to do settimeout here as well, or wait for the response
 * to finish before continuing offest and build
 * array of tracks
 * */
/*
it('get user playlists', () => {
    //expect.assertions(1)
    // here need to modify offest and limit on each time
    return spotify_api.getPlaylistTracks('7kGIhqEo5HGYTlFFeIi1j7').then( data => {
        console.log(data)
           for (item of data.body.items) {
              console.log(item.track.name)
           }}, err => console.log(err))
})
*/
it('correctly use api', () => {
    expect.assertions(1)
    return api.get_last_tracks('7kGIhqEo5HGYTlFFeIi1j7', 5).then(
        function(data) {
            expect(data.body.items.length).toBe(5)
        })
})
// http://localhost/?code=AQAuqiA-6seNum3lype4dYLlHSJ0TKXATBXsQuGH4W87i2fQuQ-IQCN587YaVZRmvzUWvk5W5nWlfAeDT2CmIBB50UI5RPmYefruZpbLSt0COPQWMe5tDk_NqpECtD1sP0AY-qdR2VgxCGfl81pYidN8Drc959PteSMzAXtJIZ6LhVSTp1s4ig
// AQAuqiA-6seNum3lype4dYLlHSJ0TKXATBXsQuGH4W87i2fQuQ-IQCN587YaVZRmvzUWvk5W5nWlfAeDT2CmIBB50UI5RPmYefruZpbLSt0COPQWMe5tDk_NqpECtD1sP0AY-qdR2VgxCGfl81pYidN8Drc959PteSMzAXtJIZ6LhVSTp1s4i
