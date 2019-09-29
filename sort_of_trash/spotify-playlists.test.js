const playlists = require('./spotify-playlists')

const arr1 = ["e","d","f"]
const arr2 = ["ab","cd","ef"]
const dict = {
    "ab": function(str) { return str + "c" },
}
// using this ugly method here because in the app
// the function will be applied to strings which will
// transform those to array without the variable-key problem
dict[arr1] = function(arr) { return arr[0] }
dict[arr2] = function(arr) { return arr.slice(1,3)}
const result = ["abc", "e", ["cd", "ef"]]
test('test if Im even stupider than javascript', () => {
    expect(playlists.apply_functions(dict)).toEqual(result)
})
