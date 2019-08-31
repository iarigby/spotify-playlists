const api = require('./spotify-api')

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
