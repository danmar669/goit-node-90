const express = require('express')
const booksRouter = require('./routers/api/books')

const app = express()

app.use(express.json())

app.use('/api/books', booksRouter)

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error"} = err
    res.status(status).json({ message })
})

app.listen(3000, () => console.log('Server running'))