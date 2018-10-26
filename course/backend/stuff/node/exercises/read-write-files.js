const fs = require('fs')

const fileOrigin = process.argv[2]
const fileDestiny = process.argv[3]

/*
let buf = fs.readFileSync(fileOrigin, err => {
    if (err)
        throw err
})

let str = buf.toString()

fs.writeFileSync(fileDestiny, str, err => {
    if (err)
        throw err;
})
*/

if (!fileOrigin) throw Error('no origin path specified')
if (!fileDestiny) throw Error('no destine path specified')

if (!fs.existsSync(fileOrigin)) throw Error('origin path does not exist')
if (fs.existsSync(fileDestiny)) throw Error('destiny path already exists')

fs.readFile(fileOrigin, (err, data) => {
    if (fileDestiny) {
        fs.writeFile(fileDestiny, data, (err) => {
            if (err) throw err
        })
    }
})