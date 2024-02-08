const getBooks = async (req, res, next) => {
    const { user } = req
    const { books } = user
    res.json({books})
}

module.exports = getBooks