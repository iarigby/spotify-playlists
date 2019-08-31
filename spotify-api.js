async function get_playlist_contents(toggle) {
    console.log(toggle)
    return new Promise((resolve, reject) => {
        if(toggle) {
            resolve(["song1", "song2"])
        } else {
            reject(Error("error"))
        }
    })
}

module.exports = {
    get_playlist_contents: get_playlist_contents,
}
