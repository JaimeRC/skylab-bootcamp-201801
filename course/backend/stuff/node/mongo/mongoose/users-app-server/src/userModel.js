const mongoose = require('mongoose');

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

mongoose.connect(`mongodb://${host}:${port}/${database}`);

const Users = mongoose.model(collection, {
    id: String,
    name: String,
    surname: String,
    email: String,
    username: String,
    password: String
})


