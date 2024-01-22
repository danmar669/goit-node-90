const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send("<h1>Home Page</h1>")
})

app.get('/contacts', (request, response) => {
    response.send("<h1>Contacts Page</h1>")
})

app.listen(3000, () => console.log('Server running'))