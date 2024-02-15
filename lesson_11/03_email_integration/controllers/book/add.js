const books = require('../../data/books')
const Book = require('../../models/books')

const add = async(req, res, next) => {
    // const result = await books.add(req.body)
    const result = await Book.create(req.body)
    res.status(201).json(result)
}

module.exports = add