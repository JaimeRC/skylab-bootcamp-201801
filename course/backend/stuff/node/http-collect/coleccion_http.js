const http = require('http')

const url = process.argv[2]

http.get(url, res => {
    res.setEncoding('utf-8')

    let result = ""

    res.on('data', data => {
        result += data
    }).on('end', () => {
        console.log(result.length)
        console.log(result)
    })

    //res.on('err', err => console.error)
})