const userData = require('../data/userData')

function validate(username, password) {
    if (!username || !password) throw Error('Invalid username and/or password.')
}

const userLogic = {
    list() {
        return userData.list().map(({ username }) => ({ username }))
    },

    register(username, password) {
        validate(username, password)

        try {
            userData.retrieve(username)
        } catch (err) {
            return userData.create(username, password)
        }

        throw Error('Username already exists.')
    },

    retrieve(username) {
        const user = userData.retrieve(username)

        return { username: user.username }
    },

    login(username, password) {
        validate(username, password)

        try {
            this.retrieve(username)
            
            userData.login(username, password)
        } catch (err) {
            throw Error(err.message)
        }
    },

    update(username, password, newPassword) {
        validate(username, password,newPassword)

        const user = userData.retrieve(username)

        if (user) {
            userData.update(username, password, newPassword)
        } else
            throw Error('User no exist')
    },

    destroy(username, password) {
        validate(username, password)

        const user = userData.retrieve(username)

        if (user.password === password) {
            userData.delete(username)
        } else
            throw Error('Wrong username and/or password.')
    }
}

module.exports = userLogic