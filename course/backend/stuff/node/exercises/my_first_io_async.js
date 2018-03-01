let fs = require('fs')

fs.readFile(process.argv[2], (error, data) => {
        if (error) {
            console.log('Ha ocurrido un error')
        }
        var str = data.toString().split('\n')
        console.log(str.length - 1)
    }
)