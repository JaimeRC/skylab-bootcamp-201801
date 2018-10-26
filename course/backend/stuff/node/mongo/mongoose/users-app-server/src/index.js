require('dotenv').config()

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

const bodyParser = require('body-parser')
const jsonBodyParse = bodyParser.json()
const formBodyParse = bodyParser.urlencoded({ extended: false })
const express = require('express')
const uuid = require('uuid/v4')
const { success, fail, validate } = require('./utils/api-utils')
const app = express()

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${host}:${port}/${database}`);

const Users = mongoose.model(collection, {
    id: String,
    name: String,
    surname: String,
    email: String,
    username: String,
    password: String
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

    //Mostrar todos los usuarios sin mostrar el id y el password
    app.get('/api/users', (req, res) => {

        //Filtramos los campos que queremos mostrar (0 no mostrar / 1 mostrar)
        Users.find({}, { _id: 0, password: 0 })
            .then(users => res.json(success(users)))
            .catch(err => res.json(fail(err.message)))
    })

    //Registrar un usuario
    app.post('/api/users/register', jsonBodyParse, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password })

                return Users.findOne({ username })
            })
            .then(user => {
                if (user) throw Error('Username already exist')

                const id = uuid()

                return Users.create({ id, name, surname, email, username, password })

            })
            .then(user => {
                res.json(success(user.id))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })


    //Eliminar un usuario
    app.delete('/api/users/:id', jsonBodyParse, (req, res) => {
        const { params: { id } } = req
        const { body: { username, password } } = req

        Promise.resolve()
            .then(() => {
                validate({ id, username, password })

                return Users.findOne({ username })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                if (user.id !== id) throw Error('user id does not match the one provided')

                if (user.username !== username && user.password !== password) throw Error('Invalid username and/or password')

                return Users.deleteOne({ id })
            })
            .then(() => {
                res.json(success())
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })


    //Actualizar el usuario (username y password)
    app.put('api/users/:id', formBodyParse, (req, res) => {
        const { params: { id } } = req
        const { body: { name, surname, email, username, password, newUsername, newPassword } } = req

        Promise.resolve()
            .then(() => {
                validate({ id, name, surname, email, username, password, newUsername, newPassword })

                return Users.findOne({ username: newUsername })
            })
            .then(user => {
                if (user) throw Error('Username already exist')

                return Users.findOne({ id })
            })
            .then(user => {
                if (user.username !== username && user.password !== password) throw Error('Invalid username and/or password')

                return Users.findOneAndUpdate({ id }, { name, surname, newEmail, username: newUsername, password: newPassword })
            })
            .then(() => {
                res.json(success())
            })
            .catch((err) => {
                res.json(fail(err.message))
            })
    })

    //Buscar usuario segun su id
    app.get('/api/users/:id', (req, res) => {
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ id })

                return Users.findOne({ id }, { _id: 0, password: 0 })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                res.json(success({ user }))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })


    const port = process.env.PORT

    app.listen(port, () => console.log(`Running server in port ${port}`))

})











