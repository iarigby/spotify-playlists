const api = require('./spotify-api')

function default_callback(err) { console.log(err) }

exports.update_playlist = function (source_playlist, destination_playlist, amount, saved_tracks) {
    return Promise.all([
        api.get_last_tracks(source_playlist, amount, saved_tracks),
        api.get_last_tracks(destination_playlist, amount)
    ]).then(values => {
        const delete_tracks = old_tracks(values)
        if (delete_tracks.length > 0)
            api.remove_songs(destination_playlist, delete_tracks)
                .then(default_callback, default_callback)
        else
            console.log('nothing to delete')

        const add_tracks = new_tracks(values)
        if (add_tracks.length > 0)
            api.add_songs(destination_playlist, add_tracks)
                .then(default_callback, default_callback)
        else
            console.log('nothing to add')
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
