const express = require('express')
const moment = require('moment')
const bodyParse = require('body-parser')

const app = express()

app.get('/', (req, res) => res.end('Hello, GET'))

app.post('/', (req, res) => res.end('Hello, POST'))

app.put('/', (req, res) => res.end('Hello, PUT'))

app.get('/api/parsetime', (req, res) => {
    const date = new Date(req.query.iso)

    const data = {
        hour: date.getHours,
        minute: date.getMinutes,
        second: date.getSeconds
    }

    /* Con Node:
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    */

    //Con Express
    res.json(data)

})

const textBodyParser = bodyParse.text()
app.post('/helloword', textBodyParser, (req, res) => {
    res.send(req.body)
})

const jsonBodyParse = bodyParse.json()
app.post('/helloword/json', jsonBodyParse, (req, res) => {
    res.json(req.body)
})

const urlencodedParser = bodyParse.urlencoded({ extended: false })
app.post('/login', urlencodedParser, (req, res) => {
    res.send(`${req.body.username}:${req.body.password}`)
})

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))

