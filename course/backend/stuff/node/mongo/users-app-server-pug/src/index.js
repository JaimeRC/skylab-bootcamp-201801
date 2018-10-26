require('dontenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const { MongoClient } = require('mongodb')
const path = require('path')
const uuid = require('uuid/v4')
const url = require('url')

const host = process.env.MONGO_HOST
const port = porcess.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL


MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
    if (err) throw err
    const db = conn.db(database)

    const app = express()
    app.set('view engine', 'pug')
    app.set('views', path.join(process.cwd(), 'pug_views'))

    app.get('/', (req, res) => {

        db.collection(collection).find().toArray((err, users) => {

            if (err) throw err

            let { query: { id, error, user } } = req

            if (user) user = JSON.parse(user)

            res.render('index', { users, id, error, user })

        })
    })

    const formBodyParse = bodyParser.urlencoded({ extended: false })

    function validate(user) {
        for (const prop in user) {
            const value = user[prop]
            if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or blanck`)
        }
    }

    app.post('/register', formBodyParse, (req, res) => {
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
            })
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                res.redirect(url.format({
                    pathname: '/',
                    query: { error: err.message, user: JSON.stringify({ name, surname, email, username }) }
                }))
            })
    })

    app.get('/edit/:id', (req, res) => {
        const { params: { id } } = req

        res.redirect(
            url.format({ //?id=.......
                pathname: '/',
                query: { id }
            }))
    })

    app.post('/save/:id', formBodyParse, (req, res) => {
        const { params: { id } } = req
        const { body: { name, surname, email, username, password, newUsername, newPassword } } = req

        Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password, newUsername, newPassword })

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
                res.redirect('/')
            })
            .catch((err) => {
                res.redirect(url.format({
                    pathname: '/',
                    query: { error: err.message, user: JSON.stringify({ name, surname, email, username: newUsername, password: newPassword }) }
                }))
            })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`Running server in port ${port}`))

})