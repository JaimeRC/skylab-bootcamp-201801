const rp = require('request-promise')


const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    /* Metodo 1
    _call(path) {
        return rp(`${this._baseUrl}/${path}`)
            .then(res => JSON.parse(res))
    },
    */
    // Metodo 2
    _call(method, path, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users')
    },

    create(name, surname, email, username, password) {
        return this._call('post', 'users', { name, surname, email, surname, password })
    },

    remove(username, password) {
        return this._call('delete', 'users', { username, password})
    }

}

module.exports = api