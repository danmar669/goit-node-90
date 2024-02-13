const books = require('../../data/books')
const Book = require('../../models/books')

const getAll = async(req, res, next) => {
    // const result = await books.getAll()
    // const result = await Book.find({}, {title: 1, author: 1})
    // const result = await Book.find()

    const { limit, page, favorite } = req.query
    const skip = (page - 1) * limit
    const result = await Book.find().skip(skip).limit(limit)

    res.json(result)
}

module.exports = getAll