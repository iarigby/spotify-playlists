const api = require('./spotify-api')

function default_callback(err) { console.log(err) }
const source_playlist = '7kGIhqEo5HGYTlFFeIi1j7'
const destination_playlist = '3jqWiGdctbwwRDAxRI9cCR'

exports.update_playlist = function() {
    return Promise.all([
        api.get_last_tracks(source_playlist, 5),
        api.get_last_tracks(destination_playlist)
    ]).then(values => {
       api.remove_songs(destination_playlist, old_tracks(values))
           .then(default_callback, default_callback)
        api.add_songs(destination_playlist, new_tracks(values))
            .then(default_callback, default_callback)
    }).catch(default_callback)
}

function difference(arr1, arr2) {
    return arr1.filter(elem => !arr2.includes(elem))
}

function new_tracks(arr) {
    return difference(arr[0], arr[1])
}

function old_tracks(arr) {
    return difference(arr[1], arr[0])
}

// update_playlist()
// api.add_songs(destination_playlist)
