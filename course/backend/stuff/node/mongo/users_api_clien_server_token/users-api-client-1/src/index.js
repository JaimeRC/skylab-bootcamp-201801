const rp = require('request-promise')

const api = {

    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body, token) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true,
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    },

    list(token) {
        return this._call('get', 'users', undefined, token)
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
    },

    register(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    remove(id, username, password, token) {
        return this._call('delete', `user/${id}`, { username, password }, token)
    },

    retrieve(id, token) {
        return this._call('get', `user/${id}`,undefined, token)
    },

    update(id, name, surname, email, newUsername, newPassword, username, password, token) {
        return this._call('put', `user/${id}`, { name, surname, email, newUsername, newPassword, username, password }, token)
    }
}

module.exports = api