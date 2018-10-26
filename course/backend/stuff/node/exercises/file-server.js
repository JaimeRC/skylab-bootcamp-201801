const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {


    const stream = fs.createReadStream(file).pipe(res)
})

const port = process.argv[2]
const file = process.argv[3]

serever.listen(port, () => console.log(`file server running on port ${port}`))