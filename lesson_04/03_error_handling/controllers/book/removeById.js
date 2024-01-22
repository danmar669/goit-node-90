const books = require('../../data/books')
const requestError = require('../../helpers/requestError')

const removeById = async(req, res, next) => {
    const { id } = req.params
    const result = await books.removeById(id)
    if (!result) {
        throw requestError(404)
    }
    res.json(result)
}

module.exports = removeById