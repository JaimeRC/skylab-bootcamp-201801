const bcrypt = require('bcrypt-nodejs')

let desencrypt

(function () {

    const compare = {
        desencrypt: (password, hash) => bcrypt.compareSync(password, hash)
    }

    desencrypt = compare
}())

module.exports = desencrypt

/*
const desencrypt = (function () {
    
    return function (hash,password) {
        bcrypt.compare(password, hash, (err, res) => {
            if (err)
                throw Error('Contraseña o Usuario introducido erroneamente')
            return res //true o false
        });
    }
}())
*/