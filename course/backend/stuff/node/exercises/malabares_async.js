const http = require('http')
let result = ['', '', '']
var count = 0

/* Metodo 1
getHttp = (url, index) => {
    http.get(process.argv[i], res => {
        res.setEncoding('utf-8')

        res.on('data', data => {
            result[index] = data
        }).on('end', () => {
            count++
            if (count === 3)
                showResult()
        })
    })
}

showResult = () => {
    for (var i = 0; i < count; i++) {
        console.log(result[i])
    }
}

for (var i = 2; i <= process.argv.length; i++) {
    getHttp(process.argv[i], i - 2)
}
*/

// Metodo 2

const numberOfUrl = process.argv.length - 2
let n = 0

function passCode() {
    const url = process.argv[n + 2]

    http.get(url, res => {
        res.setEncoding('utf-8')

        res.pipe(concatStream(data => {
            console.log('res-pipe -> res on data')
            console.log(data)
            
            if (n < numberOfUrl - 1)
                n++
            passCode()
        }))
    })
}
