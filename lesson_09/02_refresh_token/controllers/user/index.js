const addBook = require('./addBook')
const getBooks = require('./getBooks')
const getInfo = require('./getInfo')

const controllerWrapper = require('../../helpers/controllerWrapper')

module.exports = {
    addBook: controllerWrapper(addBook),
    getBooks: controllerWrapper(getBooks),
    getInfo: controllerWrapper(getInfo),
}
