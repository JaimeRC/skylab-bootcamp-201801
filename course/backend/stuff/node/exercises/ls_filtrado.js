var fs = require('fs')

var path = require('path')

fs.readdir(process.argv[2], (error, list) => {
    if (error) {
        console.log('Ha ocurrido un error')
    }
    list.forEach(file => {
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file)
        }
    })
})