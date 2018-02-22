const express = require('express')
const fs = require('fs')
const bodyParse = require('body-parser')

const app = express()
const jsonBodyParse = bodyParse.json()

app.use(jsonBodyParse)

app.post('/api/users/', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    let userArray = []

    fs.readFile('./data/user.json', data => {
        if (data) {
            userArray.push(data)
            userArray.push(user)
            //userArray.filter(item => user.username != item.username)

        } else {
            userArray.push(user)
        }
        fs.writeFile('./data/user.json', JSON.stringify(user)
        , (err) => {
            if (err) throw err
        })

    })
    res.json(user)
})

const port = 5000

app.listen(port, () => console.log(`api user running in port ${port}`))