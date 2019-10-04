const api = require('./spotify-api')

function default_callback(err) { console.log(err) }

exports.update_playlist = function (source_playlist, destination_playlist, amount, saved_tracks) {
    const log = text => console.log(`${source_playlist}: ${text}`)
    // *2 because right now delete is not working
    const overflow_limit = amount*2
    return Promise.all([
        api.get_last_tracks(source_playlist, amount, saved_tracks),
        api.get_last_tracks(destination_playlist, overflow_limit) // delete after fix 
    ]).then(values => {
        const delete_tracks = old_tracks(values)
        if (delete_tracks.length > 0) 
            // api.remove_songs(destination_playlist, delete_tracks)
                // .then(() => log("deleted tracks from " + destination_playlist), default_callback)
            log('skipping delete tracks until issue is fixed')
        else
            log('nothing to delete')
        log(`${values[0].length} new, ${} old tracks`)
        const add_tracks = new_tracks(values)
        
        // won't be needed if fixed
        if (values[1].length >= overflow_limit)
            log('playlist is full, remove songs manually until delete_tracks is fixed')
        else /*until here*/ if (add_tracks.length > 0) 
            api.add_songs(destination_playlist, add_tracks)
                .then(() => log(`added ${add_tracks.length} tracks`), default_callback)
        else
            log('nothing to add')
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
