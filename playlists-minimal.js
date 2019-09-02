const api = require('./spotify-api')

function default_callback(err) { console.log(err) }
const source_playlist = '7kGIhqEo5HGYTlFFeIi1j7'
const destination_playlist = '3jqWiGdctbwwRDAxRI9cCR'
function update_playlist() {
    Promise.all([
        api.get_last_tracks(source_playlist, 5),
        api.get_last_tracks(destination_playlist)
    ]).then(values => {
        return values.map(get_songs)
    }).then(values => {
        return values.map(get_ids)
    }).then(
        source_tracks = values[0]
        destination_tracks = values[1]
        return new Setdestination_tracks.concat(source_tracks).filter()
    }, default_callback)

}

function get_songs(result) {
    return result.body.items
}

function get_ids(songs) {
    return songs.map(song => {return song.id})
}

/**
 * add new songs
 * remove ones not needed
 * */
function merge_playlists(source, destination) {
    return Array.from(
        new Set(source.concat(destination))
            .filter(song => source.includes(song)))
}
