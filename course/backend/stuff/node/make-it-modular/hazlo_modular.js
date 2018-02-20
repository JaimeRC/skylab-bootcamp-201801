const fs = require('fs')
const path = require('path')

module.exports = function (_path, ext, ) {

    fs.readdir(_path, (error, list) => {
        if (error) {
            console.log('Ha ocurrido un error')
        }
        const filtered = list.filter(file => {
            return path.extname(file === `.${ext}`)
        })
        callback(filtered)
    })
}
