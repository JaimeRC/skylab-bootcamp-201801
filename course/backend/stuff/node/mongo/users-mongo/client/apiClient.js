const axios = require('axios')

let apiClient

(function () {

    const baseUrl = 'http://localhost:27017/'

    apiClient = {
        createUser: (user, surname, email, username, password) => {
            return axios.post(`${baseUrl}/user`, { user, surname, email, username, password })
        }
    }
})()

module.exports = apiClient