/**
 * Users API
 * 
 * @version 3.0.0
 */

require('dotenv').config()

const express = require('express')

const cors = require('cors')

const userRouter = require('./api/userRouter')

const app = express()

app.use(cors())

app.use('/api', userRouter)

const port = process.env.PORT

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT');
 
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
 
    // Pass to next layer of middleware
    next();
 });

app.listen(port, () => console.log(`Users API running on port ${port}`))