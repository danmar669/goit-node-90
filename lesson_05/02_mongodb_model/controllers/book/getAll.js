const books = require('../../data/books')
const Book = require('../../models/books')

const getAll = async(req, res, next) => {
    const result = await books.getAll()
    // const result = await Book.find()

    res.json(result)
}

module.exports = getAll