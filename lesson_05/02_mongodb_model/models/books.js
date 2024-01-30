const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title: String,
    author: String,
    year: {
        type: String
    }
})

const Book = model('book', bookSchema)

module.exports = Book