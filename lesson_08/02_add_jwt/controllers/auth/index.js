const registration = require('./registration')
const login = require('./login')

const controllerWrapper = require('../../helpers/controllerWrapper')

module.exports = {
    registration: controllerWrapper(registration),
    login: controllerWrapper(login)
}