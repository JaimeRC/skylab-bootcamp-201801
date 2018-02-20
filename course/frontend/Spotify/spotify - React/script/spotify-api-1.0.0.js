/**
 * Api Spotify Client
 * 
 */

const spotifyApi = {
    url: "https://api.spotify.com/v1/",

    token: "BQDmjlox_u5b-qZj5dqxJcm2mouW9BoePuTqZvGyz9PNw9SmB3Rcq7JBRYhcJ6QUcoe62bfuWBJN7_9jy-aKNdNy-B8LrX4_qBso5jH7cQ1m0winP8hM1p46GQ-IyQbz1IdbV5sxgg",

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
                .then(data => { resolve(data) })
                .catch(err => {
                    throw new Error(err)
                })
        })
    },

    getArtists: function (query) {
        const urlQuery = this.url + "search?q=" + query + '&type=artist';
        let artistsList = this.call(urlQuery).then(res => res.artists.items);
        console.log(artistsList)
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
