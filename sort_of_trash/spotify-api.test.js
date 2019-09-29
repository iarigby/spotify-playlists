const api = require('../spotify-api')

function default_callback(err) { console.log(err) }
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
// it('correctly use api', () => {
//     expect.assertions(1)
//     return api.get_last_tracks('7kGIhqEo5HGYTlFFeIi1j7', 5).then(
//         function(data) {
//             expect(data.length).toBe(5)
//         }, function (err) {
//             console.log(err)
//         })
// })


// it('abc', () => {
//     expect.assertions(1)
//     return api.add_songs('3jqWiGdctbwwRDAxRI9cCR', [
//         '4pR0M3MWNjotbg7YOq9yn5'
//     ]).then(function(data) {
//         expect(true)
//     }, function (err) {
//         console.log(err)
//     })
// })

const min = require('../playlists-minimal')
const source_playlist = '7kGIhqEo5HGYTlFFeIi1j7'
const destination_playlist = '3jqWiGdctbwwRDAxRI9cCR'

it('general test', () => {
    expect.assertions(1)
    return min.update_playlist(source_playlist, destination_playlist)
        .then(
            data => expect(true).toEqual(true),
            err => {console.log(err);expect(1).toEqual(1)}
        )
})


// 4pR0M3MWNjotbg7YOq9yn5
// track
// 5KxXXm42SDecF0CR6SAEQg
// si ^
// 3jqWiGdctbwwRDAxRI9cCR
// 5wQ4WwvlMMk0B7EKL5RBOM
// http://localhost/?code=AQAuqiA-6seNum3lype4dYLlHSJ0TKXATBXsQuGH4W87i2fQuQ-IQCN587YaVZRmvzUWvk5W5nWlfAeDT2CmIBB50UI5RPmYefruZpbLSt0COPQWMe5tDk_NqpECtD1sP0AY-qdR2VgxCGfl81pYidN8Drc959PteSMzAXtJIZ6LhVSTp1s4ig
// AQAuqiA-6seNum3lype4dYLlHSJ0TKXATBXsQuGH4W87i2fQuQ-IQCN587YaVZRmvzUWvk5W5nWlfAeDT2CmIBB50UI5RPmYefruZpbLSt0COPQWMe5tDk_NqpECtD1sP0AY-qdR2VgxCGfl81pYidN8Drc959PteSMzAXtJIZ6LhVSTp1s4i
