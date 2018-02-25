const taskData = require('./taskData')

const taskLogic = {

    listTodo() {
        return taskData.list()
    },

    create(task) {
        try {
            taskData.retrieve(task.id)
        } catch (err) {
            taskData.create(task)
        }

        throw Error('La tarea ya existe')
    },

    update(id, text) {
        const task = taskData.retrieve(id)
        taskData.update(task.id, text, task.done)
    },

    markDone(id) {
        const task = taskData.retrieve(id)
        taskData.update(task.id, task.text, true)
    },

    remove(id) {
        const task = taskData.retrieve(id)
        const deleteTask = taskData.delete(id)
        return deleteTask
    },

    removeAll() {
        const tasks = taskData.list()
        if (tasks.length === 0) {
            return ('No hay tareas para eliminarse')
        } else {
            tasks = new Array()
            return ('Las tareas se han eliminado correctamente')
        }
    },

    listDone() {
        const tasksDone = tasks.filter(task => task.done === true)
        if (tasksDone.length === 0) {
            return ('No hay tareas realizadas')
        } else {
            return tasksDone
        }
    }
}

module.exports = taskLogic