const net = require('net')
const date = new Date
const port = process.argv[2]

function warrant2Digits(number) {
    return number < 10 ? '0' + number : number
}

var server = net.createServer(socket => {

    let fecha = `${date.getFullYear()}-${warrant2Digits(date.getMonth() +1)}-${warrant2Digits(date.getDate())} ${warrant2Digits(date.getHours())}:${warrant2Digits(date.getMinutes())}\n`

    socket.end(fecha.toString())
})

server.listen(port)