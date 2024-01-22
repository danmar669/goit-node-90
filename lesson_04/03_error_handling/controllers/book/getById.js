const books = require('../../data/books')
const requestError  = require('../../helpers/requestError')

const getById = async(req, res, next) => {
    const { id } = req.params
    const result = await books.getById(id)
    if (!result) {
        throw requestError(404)
    }
    res.json(result)
}

module.exports = getById