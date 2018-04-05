/**
 * Users API - Server
 * 
 * @version 4.0.0
 */

const bodyParser = require('body-parser')

const jsonBodyParser = bodyParser.json()

const userLogic = require('../logic/userLogic')

const { Router } = require('express')

const { success, fail } = require('./api-utils')

const router = Router()

//Listar a todos los usuarios
router.get('/users', (req, res) => res.json(success('Users listing succeeded.', userLogic.list())))

//Listar por usuario determinado
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
    const { username, secretPass } = req.body

    try {
        userLogic.register(username, secretPass)

        res.json(success('User registration succeeded.'))
    } catch (err) {
        res.json(fail('User registration failed.', err.message))
    }
})

//Validar usuario y contraseña
router.post('/users/:username', jsonBodyParser, (req, res) => {
    const { body: { password } } = req
    const { params: { username } } = req

    try {
        userLogic.login(username, password)

        res.json(success('User validated succeeded'))
    } catch (err) {
        res.json(fail('User validation failed.', err.message))
    }
})

//Actualizar la contraseña con la contraseña inicial
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

//Eliminar usuario segun su nombre y contraseña
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