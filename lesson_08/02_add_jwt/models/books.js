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
    genre: {
        type: String,
        enum: ['tech', 'antiutopia'],
        required: [true, 'Please, specify the genre']
    },
    isbn: {
        type: String,
        match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
        unique: true,
        required: true
    },
    qty: {
        type: Number,
        max: 5,
        min: 2,
        default: 1,
        required: true
    },
    year: {
        type: String
    }
}, {versionKey: false, timestamps: true})

const Book = model('book', bookSchema)

module.exports = Book