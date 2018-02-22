const net = require('net')

const server = net.createServer(socket => {
    socket.on('data', data => console.log(data))
})

const port = process.argv[2]

server.listenerCount(port, () => console.log(`chat server running on ${port}`))