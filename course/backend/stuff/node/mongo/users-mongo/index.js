require('dotenv').config()

const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectID
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })

MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')
    let _id = ""
    let result = ""
    const obj = {}
    let login = ""


    // Metodo para renderizar t
    app.get('/', (req, res) => {
        db.collection('users').find().toArray((err, data) => {
            if (err) throw err

            res.render('form', { data, _id, result, obj,login })
        })
    })


    //Metodo para crear un usuario
    app.post('/user', formBodyParser, (req, res) => {
        const { name, surname, email, username, password } = req.body
        obj = { name, surname, email, username, password }

        db.collection('users').find().toArray((err, data) => {
            if (data.every(item => item.name !== name)) {
                db.collection('users').insert({
                    name,
                    surname,
                    email,
                    username,
                    password
                }).then(() => {
                    obj = {}
                    res.redirect('/')
                })

            } else {
                result = "El usuario ya existe"
                res.redirect('/')
            }
        })
    })

    //Metodo para eliminar un usuario
    app.get('/delete/:id', (req, res) => {
        const { params: { id } } = req
        db.collection('users').remove({ "_id": ObjectId(id) })
        res.redirect('/')
    })

    //Metodo para mostrar o ocultar los campos a actualizar
    app.get('/show/:id', (req, res) => {
        const { params: { id } } = req
        if (_id == id) {
            _id = ""
        } else {
            _id = id
        }
        result = ""
        res.redirect('/')
    })

    //Metodo para actualizar los campos
    app.post('/update/:id', formBodyParser, (req, res) => {
        const { name, surname, email, username, password } = req.body
        const { id } = req.params

        if (name === "" || surname === "") {
            result = "Rellene todos los campos"
            res.redirect('/')
        } else {
            db.collection('users').update({ "_id": ObjectId(id) }, {
                name,
                surname,
                email,
                surname,
                password
            }).then(() => {
                result = "Campos actualizados"
                res.redirect('/')
            })
        }
    })

    //Metodo para validar el usuario y la contraseña
    app.post('/validate/:id', formBodyParser, (req, res) => {
        const { body: { username, password } } = req
        
        res.redirect('/')
    })

    function validateInput(id, value) {
        let confirm = false
        db.collection('users').find({ "_id": ObjectId(id) }, (err, data) => {
            for (prop in data) {
                if (data[prop] === value) {
                    confirm = true
                }
            }
        })
        return confirm
    }

    const port = process.env.PORT

    app.listen(port, () => console.log(`Server running in port ${port}`))

    process.on('SIGNINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})