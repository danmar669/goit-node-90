const User = require('../../models/users')

const addBook = async (req, res, next) => {
    const { user } = req
    const { id: bookID} = req.body

    user.books.push(bookID)

    await User.findByIdAndUpdate(user._id, user)

    res.json({books: user.books})
}

module.exports = addBook