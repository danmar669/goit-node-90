const books = require('../../data/books')
const Book = require('../../models/books')
const requestError = require('../../helpers/requestError')


const removeById = async(req, res, next) => {
    const { id } = req.params
    // const result = await books.removeById(id)
    const result = await Book.findByIdAndDelete(id)
    if (!result) {
        throw requestError(404)
    }
    res.json(result)
}

module.exports = removeById