const bcrypt = require('bcrypt')

let desencryp = (function () {
    
    return function (username,password) {
        const hash = userData.corfimPass(username)
        bcrypt.compare(password, hash, (err, res) => {
            if (err)
                throw Error('Contraseña o Usuario introducido erroneamente')
            return res //true o false
        });
    }
}())



/*
let bcrypt = {

    desencryptar(username, password) {
        const hash = userData.corfimPass(username)
        bcrypt.compare(password, hash, (err, res) => {
            if (err)
                throw Error('Contraseña o Usuario introducido erroneamente')
            return res
        });
    }
}
*/