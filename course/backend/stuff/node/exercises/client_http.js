const http = require('http')

const url = process.argv[2]

http.get(url, request => {
    request.setEncoding('utf-8')

    request.on('data', data => {
        console.log(data)
    })

    request.on('err', (err) => console.error)

    request.on('end', () => console.log('ending...'))
})