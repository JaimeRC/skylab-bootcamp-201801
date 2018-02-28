const desencrypt = require('./desencrypt')

const bcrypt = require('./encrypt')


const users = []

const userData = {
    list() { return users },

    create(username, password) {
        users.push({
            username: username,
            password: password
        })
    },

    retrieve(username) {
        const user = users.find(user => user.username === username)

        if (user) return user

        throw Error('User does not exist.')
    },

    update(username, password, newPassword) {
        const user = this.retrieve(username)

        //**************************************** */
        const secretPass = desencrypt.desencrypt(password, user.password)
        if (!secretPass)
            throw Error('Wrong username and/or password.')
        user.password = bcrypt.encrypt(password)
    },

    delete(username) {
        const index = users.findIndex(user => user.username === username)

        if (index < 0) throw Error('User does not exist.')

        users.splice(index, 1)
    }
}

module.exports = userData