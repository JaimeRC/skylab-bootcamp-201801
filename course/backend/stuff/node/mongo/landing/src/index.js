const { MongoClient } = require('mongodb')

require('dotenv').config()

const express = require('express')

const app = express()


MongoClient.connect('mongodb://localhost:27017/', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        const query = req.query.q || req.query.query

        const regex = new RegExp(query, 'i')

        db.collection('staff').find({ name: regex, email: regex }).toArray((err, data) => {
            if (err) throw err

            //console.log(data)

            res.json(data)
            
            //database.close()
        })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`Server running in port ${port}`))

    process.on('SIGNINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})