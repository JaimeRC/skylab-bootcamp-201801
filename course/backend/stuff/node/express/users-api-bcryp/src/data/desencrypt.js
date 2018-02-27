const bcrypt = require('bcrypt-nodejs')

const desencrypt = (function () {
    
    return function (hash,password) {
        bcrypt.compare(password, hash, (err, res) => {
            if (err)
                throw Error('Contraseña o Usuario introducido erroneamente')
            return res //true o false
        });
    }
}())

module.exports = desencrypt