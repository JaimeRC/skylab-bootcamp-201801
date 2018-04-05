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
            const secretPass = hash(password)
            return axios.post(`${baseUrl}/users`, { username, secretPass })
        },

        //Peticion si el usuario existe
        validateUser: function (username, password) {
            return axios.post(`${baseUrl}/users/${username}`, { password })
        },

        //Cambiar contraseña del usuario
        changePassword: function (username, password, newPassword) {
            return axios.put(`${baseUrl}/users/${username}`, { password, newPassword })
        }
    }

})()

module.exports = apiClient