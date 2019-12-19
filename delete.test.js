const api = require('./spotify-api')

const playlist = '3jqWiGdctbwwRDAxRI9cCR'
api.remove_songs(playlist, ['spotify:track:511InmWye3UrDWkcE4SmT4']).then(
    () => {},
    err => console.log(err)
)