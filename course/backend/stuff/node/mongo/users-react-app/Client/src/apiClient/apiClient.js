const axios = require('axios')

let apiClient;

(function () {

    const baseUrl = 'http://localhost:8080/api/users'


    apiClient = {

        //Listar usuarios
        listUsers: function () {
            return axios.get(baseUrl)
            .then(data => data.data.message)
        },

        //Crear un usuario
        createUser: function (name, surname, email, username, password) {
            return axios.post(`${baseUrl}/register`, { name, surname, email, username, password })
        },

        //Actualizar los datos del usuario
        updateUser: function (id, name, surname, email, username, password, newUsername, newPassword) {
            return axios.put(`${baseUrl}/${id}`, { data: { name, surname, email, username, password, newUsername, newPassword } })
        },

        //Eliminar usuario
        deleteUser: function (id, username, password) {
            return axios.delete(`${baseUrl}/users/${id}`, { username, password })
        },

        //Datos de un usuario concreto
        getUser: function (id, username, password) {
            return axios.get(`${baseUrl}/${id}`)
        },


    }

})()

module.exports = apiClient