const books = require('../../data/books')
const Book = require('../../models/books')
const { requestError } = require('../../helpers/requestError')

const updateById = async(req, res, next) => {
    const { id } = req.params
    const { favorite } = req.body
    // const { title, author } = req.body
    const result = await Book.findByIdAndUpdate(id, {favorite}, {new: true})
    // const result = await books.updateById({id, title, author })
    if (!result) {
        throw requestError(404, "Not found Book")
    }
    res.json(result)
}

module.exports = updateById