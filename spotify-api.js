function get_playlist_id(song_name) {
    return new Promise()
}

function get_playlist_contents(playlist_id) {
    return new Promise((resolve, reject) => {
        if(playlist_id) {
            resolve(["song1", "song2"])
        } else {
            reject(Error("error"))
        }
    })
}

module.exports = {
    get_playlist_contents: get_playlist_contents,
    get_playlist_id: get_playlist_id,
}
