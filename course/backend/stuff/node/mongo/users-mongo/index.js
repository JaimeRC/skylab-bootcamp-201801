require('dotenv').config()

const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        res.render('form')
    })


    app.post('/user', bodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        db.collection('users').insert({
            name: name,
            surname: surname,
            email: email,
            username: usename,
            password: password
        })
        res.redirect('/')
    })

    app.post('/validate',bodyParser,(req,res)=>{
        const { body: { username, password } } = req

        
    })


    const port = process.env.PORT

    app.listen(port, () => console.log(`Server running in port ${port}`))

    process.on('SIGNINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})