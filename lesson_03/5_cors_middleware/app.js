const express = require('express')
const moment = require('moment')
const fs = require('fs/promises')
const cors = require('cors')

const books = require('./books')

const app = express()

app.use(cors())

app.set('json spaces', 4)

app.use(async(req, res, next) => {
    const { method, url } = req
    const date = moment().format("DD-MM-YYYY_hh:mm:ss")
    await fs.appendFile('server.log', `\n${method} ${url} ${date}`)

    next();
})


// app.use((request, response, next) => {
//     console.log('First middleware')
//     next();
// })

app.get('/', (request, response) => {
    response.send("<h1>Home Page</h1>")
})

app.get('/contacts', (request, response) => {
    response.send("<h1>Contacts Page</h1>")
})

app.get('/books', (requset, response) => {
    // response.send(books)
    response.json(books)
    // response.send(null)
    // response.status(200).json(null)
})

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000, () => console.log('Server running'))