const axios = require('axios')

const bcrypt = require('./encrypt')

let apiClient;

(function () {

    const baseUrl = 'http://localhost:5000/api'

    const hash = (password) => {
        return bcrypt.encrypt(password)
    }

    apiClient = {

        //Crear un usuario
        createUser: function (username, password) {
            const newPassword = hash(password)
            console.log(newPassword)
            return axios.post(`${baseUrl}/users`, { username, newPassword })
        },

        //Peticion si el usuario existe
        validateUser: function (username, password) {
            console.log(`${baseUrl}/users/${username}`)
            return axios.post(`${baseUrl}/users/${username}`, { password })
        },

        //Cambiar contraseña del usuario
        changePassword: function (username, password, newPassword) {
            console.log(`${baseUrl}/users/${username}`)
            return axios.put(`${baseUrl}/users/${username}`, { password, newPassword })
        }
    }

})()

module.exports = apiClient