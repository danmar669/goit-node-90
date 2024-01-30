const books = require('../../data/books')
const { requestError } = require('../../helpers/requestError')

const updateById = async(req, res, next) => {
    const { id } = req.params
    const { title, author } = req.body
    const result = await books.updateById({id, title, author })
    if (!result) {
        throw requestError(404, "Not found Book")
    }
    res.json(result)
}

module.exports = updateById