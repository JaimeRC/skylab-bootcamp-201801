const http = require('http')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true)
    let date, data

    switch (_url.pathname) {
        case '/api/parsetime':
            date = new Date(_url.query.iso)
            data = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
            break

        case '/api/unixtime':
            date = new Date(_url.query.iso)
            data = {
                unixtime: date.getTime()
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
            break

        default:
            res.writeHead(405)
            res.end('Hello! i cannot process tha request... sorry :(')
    }

})

server.listen(port, () => console.log(`http json api server running on port ${port}`))