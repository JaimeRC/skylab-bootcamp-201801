require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {
    !true && it('should register', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                // TODO delete

                done()
            })
            .catch(done)
    })

    !true && it('should list', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(() => api.register('n', 's', 'e', 'u1', 'p'))
            .then(() => api.list())
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                // TODO delete all

                done()
            })
            .catch(done)
    })

    !true && it('should delete', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.remove(res.data.id, 'u', 'p'))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })

    !true && it('should retrieve', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.retrieve(res.data.id))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                const user = res.data

                assert(user, 'should return data user')

                assert.equal(user.name, 'n')
                assert.equal(user.surname, 's')
                assert.equal(user.email, 'e')
                assert.equal(user.username, 'u')

                done()
            })
            .catch(done)
    })

    !true && it('should update', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.update(res.data.id, 'n', 's', 'e', 'u2', 'p', 'u', 'p'))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })

    let _token = ""
    //Test del login
    !true && it('should login', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.login('u', 'p'))
            .then(res => {
                _token = res.data.token

                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })

    //Test Listar usuarios
    !true && it('should list user', done => {
        api.login('u', 'p')
            .then(res => res.data.token)
            .then(token => api.list(token))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                
                done()
            })
            .catch(done)
    })

    //Test Actualizar usuario
    !true && it('shoul update user', done => {
        api.login('u', 'p')
            .then(res => res.data.token)
            .then(token => api.update('ea8952e7-7a1b-46d1-8fc1-3ee9722d8b3c', ))
    })
})