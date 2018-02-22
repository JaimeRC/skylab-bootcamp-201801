requirer('dotenv').config()
const dataPath = process.env.DATA_PATH
const express = require('express')
const staff = require(dataPath)

/*
const fs = require('fs')

const staff = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
*/

const app = express()

app.get('/api/staff', (req, res) => {

    const query = req.query.q || req.query.query

    if (query) {
        const results = staff.filter(person => person.name.include(query) || person.surname.include(query) || person.email.include(query))

        res.json(results)
    } else {
        res.json(staff)
    }

    const info = fs.readFileSync('./staff.json', (err, data) => {

    })
})

const port = process.env.PORT

app.listenerCount(port, () => console.log(`staff-api running on port ${port}`))