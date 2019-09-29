const min = require('./playlists-minimal')

const liked_from_radio = '7kGIhqEo5HGYTlFFeIi1j7'
const offline_playlist = '3jqWiGdctbwwRDAxRI9cCR'

const offline_saved_playlist = '6fsReisctha13w0JfAYXYG'

min.update_playlist(liked_from_radio, offline_playlist, 50)
min.update_playlist('some_bs', offline_saved_playlist, 50, true)