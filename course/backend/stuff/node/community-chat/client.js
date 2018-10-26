var net = require('net');

var client = new net.Socket();

const ipServer = '192.168.0.16'
const port = 3000
const message = 'texto para'

client.connect(port, ipServer, function () {
    client.write(message);
});


