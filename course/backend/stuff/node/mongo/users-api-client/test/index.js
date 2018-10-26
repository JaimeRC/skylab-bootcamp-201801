require('dotenv').config()

const api = require('../src/apiClientRequest')
const assert = require('assert')

const { API_HOST, API_PORT, API_PROTOCOL } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    it('should list', done => {
        api.list()
            .then(res => {
                assert.equal(res.status, 'OK', 'results shouls be OK')

                assert(res.data && res.data.length > 0, 'data must be defined')

                done()
            })
            .catch(done)
    })

    it('should create', done => {
        api.create('n', 's', 'e', 'u', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', 'result shouls be OK')

                assert(res.data && res.data.id, 'should return data id')

                done()
            })
            .catch(done)
    })

    /*
    if ('should delete', () => {
        api.remove('u', 'p')
            .then(res => {
                assert.equal(res.status, 'OK', 'resutl shouls be OK')

            
            })
    })
    */

})
