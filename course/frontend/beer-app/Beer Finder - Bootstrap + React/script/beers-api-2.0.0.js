/**
 * Beers API client.
 * 
 * @version 2.0.0
 */

const BeersApi = {
    url: "https://quiet-inlet-67115.herokuapp.com/api/",

    call: function (path) {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then(res => res.json())
                .then(data => { resolve(data) })
                .catch(err => {
                    throw new Error(err)
                })
        })
    },

    getBeerList: function (query) {
        const urlQuery = this.url + "search/all?q=" + query
        let beerList = this.call(urlQuery)
        return beerList;
    },

    getBeer: function (idBeer) {
        const urlQuery = this.url + "beer/" + idBeer;
        let infoBeer = this.call(urlQuery);
        return infoBeer;
    }

}


