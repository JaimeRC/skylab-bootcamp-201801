const bcrypt = require('bcrypt-nodejs')

const encrypt = (function () {

    const BCRYPT_SALT = 12

    return (password) => {
        bcrypt.hash(password, BCRYPT_SALT, null, function (err, hash) {
            if (err)
                throw Error('No se ha podido crear la contraseña')
            return hash
        });
    }

}())

module.exports = encrypt