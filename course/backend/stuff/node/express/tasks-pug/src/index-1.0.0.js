require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const tasks = []

app.get('/', (req, res) => {
    const done = tasks.filter(task => task.done === true)
    const todo = tasks.filter(task => task.done === false)
    
    res.render('form', { tasks, todo, done })
})

app.post('/add', formBodyParser, (req, res) => {
    let index
    if (tasks.length === 0) {
        index = 1
    } else {
        index = tasks[tasks.length - 1].id + 1
    }
    tasks.push({
        id: index,
        text: req.body.task,
        done: false
    })
    res.redirect('/')
})

app.get('/done/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const task = tasks.find(task => task.id === id)
    task.done = true
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const indexTask = tasks.findIndex(task => task.id === id)
    tasks.splice(indexTask, 1)
    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))