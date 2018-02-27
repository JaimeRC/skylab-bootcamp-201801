const bcrypt = require('bcrypt')

const encryt = (function () {
    
    const BCRYPT_SALT = 12

    return function (password) {
        bcrypt.genSalt(BCRYPT_SALT, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err)
                    throw Error('No se ha podido crear la contraseña')
                return hash
            })
        })
    }
}())


/*
const bcrypt = {

    encryptar(password) {
        bcrypt.genSalt(SALT, (err, SALT) => {
            bcrypt.hash(password, SALT, (err, hash) => {
                if (err)
                    throw Error('No se ha podido crear la contraseña')
                return hash
            })
        })
    },
}
*/
