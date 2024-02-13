const Book = require('../../models/books')
const fs = require('fs/promises')
const path = require('path')

const uploadImage = async (req, res, next) => {
    const { filename } = req.file

    const tmpPath = path.resolve('tmp', filename)
    const publicPath = path.resolve('public', filename)

    try {
        await fs.rename(tmpPath, publicPath)

        const bookId = req.params.id
        const book = await Book.findByIdAndUpdate(bookId, {image: publicPath}, {new: true})

        return res.json({image: book.image})
    } catch (error) {
        await fs.unlink(tmpPath)
        throw error
    }
}

module.exports = uploadImage