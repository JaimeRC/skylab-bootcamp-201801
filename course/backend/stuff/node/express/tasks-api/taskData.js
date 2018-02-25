let tasks = []

const taskData = {

    list() {
        if (tasks.length === 0) {
            return 'No hay tareas'
        } else {
            return tasks
        }
    },
    create(task) {
        const item = {
            id: task.id,
            text: task.text,
            done: task.done,
            username: task.username
        }
        tasks.push(item)
    },
    retrieve(id) {
        const task = tasks.find(task => task.id === id)
        if (task) return tasks

        throw Error('La tarea no existe')
    },
    update(id, text, done) {
        const task = tasks.find(task => task.id === id)
        task.text = text
        task.done = done
    },
    delete(id){
        const index = tasks.findIndex(task => task.id === id)

        if (index < 0) {
            throw Error('La tarea no existe')
        } else{
            users.splice(index, 1)
            return (`Tarea con id ${id} ha sido eliminada`)
        }
        
    }


}


module.exports = taskData