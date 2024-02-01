const books = require('../../data/books')
const Book = require('../../models/books')
const requestError  = require('../../helpers/requestError')

const getById = async(req, res, next) => {
    const { id } = req.params
    // const result = await books.getById(id)
    // const result = await Book.findOne({author: "George Orwell"})
    // const result = await Book.findOne({_id: id})
    const result = await Book.findById(id)
    if (!result) {
        throw requestError(404)
    }
    res.json(result)
}

module.exports = getById