require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const apiClient = require('./apiClient')

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.render('form')
})

app.post('/user', bodyParser, (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    apiClient.createUser(name, surname, email, username, password)
        .then(res => resutl = res.data)
})

const port = process.env.PORT

app.listen(port, () => console.log('running server in port 1234'))