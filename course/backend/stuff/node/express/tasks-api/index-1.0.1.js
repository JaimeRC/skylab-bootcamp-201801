/**
 * API TASK 
 * 
 * @version 1.0.1
 * @param {Array} tasks - Lista de tareas
 * @param {Boolean} taskExist - Si existe la tarea
 * 
 */

require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const taskLogic = require('./taskLogic')

const jsonBodyParser = bodyParser.json()

const app = express()

const router = express.Router()

app.use('/api', router)


// Listar Tareas
router.get('/show/tasks', (req, res) => {
    res.json(taskLogic.listTodo())
})

// Crear Tarea
router.post('/create/task', jsonBodyParser, (req, res) => {
    try {
        const newTask = taskLogic.create(req.body)
        res.json(newTask)

    } catch (err) {
        res.send(err.message)
    }

})

// Modificar una tarea
router.put('/update/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    const text = req.body.text

    try {
        const updateTask = taskLogic.update(id, text)
        res.json(updateTask)
    } catch (err) {
        res.send(err.message)
    }

})

// Eliminar una tarea
router.delete('/delete/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    try {
        const deleteTask = taskLogic.remove(id)
        res.send(deleteTask)
    } catch (err) {
        res.send(err.message)
    }
})

// Eliminar todas las tareas
router.delete('/deleteall/tasks', jsonBodyParser, (req, res) => {
    res.send(taskLogic.removeAll())
})

// Actualizar la tarea a realizada
router.put('/done/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id

    try {
        const doneTask = taskLogic.markDone(id)
        res.json(doneTask)
    } catch (err) {
        res.send(err.message)
    }
})

// Listar todas las tareas realizadas
router.get('/listdone/tasks', jsonBodyParser, (req, res) => {
    res.send(taskLogic.listDone())

})

const port = process.env.PORT

app.listen(port, () => console.log(`Conexion realizada en el puerto ${port}`))