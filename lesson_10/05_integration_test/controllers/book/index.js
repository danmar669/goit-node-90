const getAll = require('./getAll')
const getById = require('./getById')
const removeById = require('./removeById')
const add = require('./add')
const updateById = require('./updateById')
const uploadImage = require('./uploadImage')

const controllerWrapper = require('../../helpers/controllerWrapper')

module.exports = {
    getAll: controllerWrapper(getAll), 
    getById: controllerWrapper(getById), 
    removeById: controllerWrapper(removeById), 
    add: controllerWrapper(add),
    updateById: controllerWrapper(updateById),
    uploadImage: controllerWrapper(uploadImage)
}