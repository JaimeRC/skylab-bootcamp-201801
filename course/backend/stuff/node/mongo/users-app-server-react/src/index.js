require('dontenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')
const { success, fail } = require('./api-utils')

const host = process.env.MONGO_HOST
const port = porcess.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL


MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
    if (err) throw err
    const db = conn.db(database)

    const app = express()

    app.get('/api/users', (req, res) => {

        //Filtramos con el metodo "project" los campos que queremos mostrar (0 no mostrar / 1 mostrar)
        db.collection(collection).find().project({ _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1 }).toArray((err, users) => {

            if (err) return res.json(fail(err))

            res.json(success(users))
        })
    })

    const jsonBodyParse = bodyParser.json()

    function validate(user) {
        for (const prop in user) {
            const value = user[prop]
            if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or blanck`)
        }
    }


    app.post('/api/users/register', jsonBodyParse, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password })

                return db.collection(collection).findOne({ username })
            })
            .then(user => {
                if (user) throw Error('Username already exist')

                const id = uuid()

                return db.collection(collection).insert({ id, name, surname, email, username, password })
                    .then(() => id)
            })
            .then(id => {
                res.json(success({ id }))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    app.put('api/users/:id', formBodyParse, (req, res) => {
        const { params: { id } } = req
        const { body: { name, surname, email, username, password, newUsername, newPassword } } = req

        Promise.resolve()
            .then(() => {
                validate({ id, name, surname, email, username, password, newUsername, newPassword })

                return db.collection(collection).findOne({ username: newPassword })
            })
            .then(user => {
                if (user) throw Error('Username already exist')

                return db.collection(collection).find({ id })
            })
            .then(user => {
                if (user.username !== username && user.password !== password) throw Error('Invalid username and/or password')

                return db.collection(collection).updateOne({ id }, { $set: { name, surname, newEmail, username: newUsername, password: newPassword } })
            })
            .then(() => {
                res.json(success())
            })
            .catch((err) => {
                res.json(fail(err.message))
            })
    })

    app.delete('/api/users/:id', jsonBodyParse, (req, res) => {
        const { params: { id } } = req
        const { body: { username, password } } = req


        Promise.resolve()
            .then(() => {
                validate({ id, username, password })

                return db.collection(collection).findOne({ username })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                if (user.id !== id) throw Error('user id does not match the one provided')

                if (user.username !== username && user.password !== password) throw Error('Invalid username and/or password')

                return db.collection(collection).findOne({ id })
            })
            .then(id => {
                res.json(success({ id }))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })


    app.get('/api/users/:id', (req, res) => {
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ id })

                return db.collection(collection).findOne({ id }, { projection: { _id: 0, password: 0 } })
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