const mongoose = require('mongoose')
const app = require('./app')

const { DB_HOST } = process.env

mongoose
    .connect(DB_HOST)
    .then(() => console.log("DB connected"))
    .then(() => app.listen(3000, () => console.log("Server running")))
    .catch((err) => {
        console.error(err.message)
        process.exit(1)
    });
