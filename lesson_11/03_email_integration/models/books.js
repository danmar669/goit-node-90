const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [3, 'Title must be at least 3 char']
    },
    author: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: ''
    }
}, {versionKey: false, timestamps: true})

const Book = model('book', bookSchema)

module.exports = Book