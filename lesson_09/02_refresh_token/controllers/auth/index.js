const registration = require('./registration')
const login = require('./login')
const refreshToken = require('./refreshToken')

const controllerWrapper = require('../../helpers/controllerWrapper')

module.exports = {
    registration: controllerWrapper(registration),
    login: controllerWrapper(login),
    refreshToken: controllerWrapper(refreshToken)
}