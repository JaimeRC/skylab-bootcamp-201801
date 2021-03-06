const bodyParser = require('body-parser')

const jsonBodyParser = bodyParser.json()

const userLogic = require('../logic/userLogic')

const { Router } = require('express')

const { success, fail } = require('./api-utils')

const bcrypt = require('./encrypt')

const router = Router()

router.get('/users', (req, res) => res.json(success('Users listing succeeded.', userLogic.list())))

router.get('/users/:username', (req, res) => {
    //const username = req.params.username
    //const { username } = req.params
    const { params: { username } } = req

    try {
        const user = userLogic.retrieve(username)

        res.json(success('User retrieval succeeded.', user))
    } catch (err) {
        res.json(fail('User retrieval failed.', err.message))
    }
})

/**
 * Create User and Password
 * 
 * @param {String} username
 * @param {String} password
 * @param {String} hash - encrypted password
 */

router.post('/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    try {
        const hash = bcrypt.encrypt(password)
        userLogic.register(username, hash)

        res.json(success('User registration succeeded.'))
    } catch (err) {
        res.json(fail('User registration failed.', err.message))
    }
})

router.put('/users/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req
    const { password, newPassword } = req.body
    
    try {
        userLogic.update(username, password, newPassword)

        res.json(success('User update succeeded'))
    } catch (err) {
        res.json(fail('User update failed.', err.message))
    }
})

router.delete('/users/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req

    const { password } = req.body

    try {
        userLogic.destroy(username, password)

        res.json(success('User deletion succeeded'))
    } catch (err) {
        res.json(fail('User deletion failed.', err.message))
    }
})

module.exports = router