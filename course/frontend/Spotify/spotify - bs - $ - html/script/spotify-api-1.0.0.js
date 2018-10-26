/**
 * Api Spotify Client
 * 
 */

const spotifyApi = {
    url: "https://api.spotify.com/v1/",

    token: "BQCD6VH_sMXLQZ-7-p9kT0Yj31_gHfRzhs5SnwHYSGFbcISjZLzdILfOjgN5YkQ5BmKqgyiQIowAXGdZzp7Bp6he1LqDZjx4qj6S_epC6vJlgJCUGDnAH9EB4niOVooNzHAHmaw96vMluJGVm44_2Fc",

    getHeader: function () {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
    },

    call: function (path) {
        return new Promise((resolve, reject) => {
            fetch(path, this.getHeader())
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => {
                    throw new Error(err)
                })
        })
    },

    getArtists: function (query) {
        console.log(query)
        const urlQuery = this.url + "search?q=" + query + '&type=artist';
        console.log(urlQuery)
        let artistsList = this.call(urlQuery).then(res => res.artists.items);
        console.log(artistsList);
        return artistsList;
    },

    getAlbums: function (idArtist) {
        const urlQuery = this.url + 'artists/' + idArtist;
        let albumsList = this.call(urlQuery).then(res => res.items);
        return albumsList;
    },

    getTracks: function (idAlbum) {
        const urlQuery = this.url + "albums/" + idAlbum + "/tracks"
        let tracksList = this.call(urlQuery).then(res => res.items);
        return tracksList;
    }

}
