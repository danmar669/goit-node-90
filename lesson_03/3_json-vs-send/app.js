const express = require('express')

const books = require('./books')

const app = express()

app.set('json spaces', 4)

app.get('/', (request, response) => {
    response.send("<h1>Home Page</h1>")
})

app.get('/contacts', (request, response) => {
    response.send("<h1>Contacts Page</h1>")
})

app.get('/books', (requset, response) => {
    // response.send(books)
    // response.json(books)
    // response.send(null)
    // response.json(null)
})

app.listen(3000, () => console.log('Server running'))