let tasks = []

const taskLogic = {

    listTodo() {
        if (tasks.length === 0) {
            return ('No hay tareas grabadas.')
        }
        return tasks
    },
    create(task) {
        const taskExist = tasks.some(item => item.id === task.id)

        if (taskExist) {
            throw Error('La tarea ya existe')

        } else {
            const item = {
                id: task.id,
                text: task.text,
                done: task.done,
                username: task.username
            }
            tasks.push(item)
            return item;
        }
    },
    update(id, text) {
        const index = tasks.findIndex(task => task.id === id)
        if (index < 0) {
            throw Error('La tarea no existe')
        } else {
            tasks[index].text = text
            return tasks[index]
        }
    },

    markDone(id) {
        const index = tasks.findIndex(task => task.id === id)
        if (index < 0) {
            throw Error('La tarea no existe')
        } else {
            tasks[index].done = true
            return tasks[index]
        }
    },

    remove(id) {
        const index = tasks.findIndex(task => task.id === id)
        if (index < 0) {
            throw Error('La tarea no existe')
        } else {
            tasks.splice(index, 1)
            return (`Tarea con id ${id} ha sido eliminada`)
        }
    },

    removeAll() {
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