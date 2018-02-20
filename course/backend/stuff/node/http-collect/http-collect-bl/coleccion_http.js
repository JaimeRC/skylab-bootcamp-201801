const http = require('http')
const bl = require('bl')

const url = process.argv[2]

http.get(url, res => {
    res.setEncoding('utf-8')

    let result = ""

    res.pipe(bl((err, data) => {
        if (err) throw err;

        console.log(data.toString())

    }))
    //res.on('err', err => console.error)
})