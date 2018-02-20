const http = require('http')
const concatStream = require('concat-stream')

const url = process.argv[2]

http.get(url, res => {
    res.setEncoding('utf-8')

    let result = ""

    res.pipe(concatStream(data => {

        console.log(data)

    }))
    //res.on('err', err => console.error)
})