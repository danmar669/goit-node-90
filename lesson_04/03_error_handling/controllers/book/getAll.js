const books = require('../../data/books')

const getAll = async(req, res, next) => {
    const result = await books.getAll()
    res.json(result)
}

module.exports = getAll