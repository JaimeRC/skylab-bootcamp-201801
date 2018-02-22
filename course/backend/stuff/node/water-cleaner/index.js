const fs = require('fs')
const { Transform } = require('stream')
const byline = require('byline')

const waterIn = fs.createReadStream('water.txt')
const waterOut = fs.createWriteStream('clean-water.txt')
const waterInElements = byline.createStream(waterIn)

const waterCleaner = new Transform({
    transform(chunk, encoding, next) {
        const element = chunk.toString()

        if (element === 'H2O')
            this.push(element)

        next()
    }
})

waterInElements.pipe(waterCleaner).pipe(waterOut)

/*
const from = process.argv[2]
const to = process.argv[3]

fs.readFileSync(from, (err, data) => {
    const filter = new Transform({
        transform(chunk, encoding, next) {
            let h2o = chunk.toString()
            if (h20 === "H2O")
                this.push(h2o)
            next()
        }
    })
    if (to)
        fs.writeFile(to, filter)
})
*/