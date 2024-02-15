const requestError = require('../helpers/requestError')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const User = require('../models/users')
const controllerWrapper = require('../helpers/controllerWrapper')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization || ''

    const [type, token] = authHeader.split(' ')

    if (type !== "Bearer") {
        throw requestError(401, "Token type is not valid!")
    }

    if (!token) {
        throw requestError(401, "No token provided")
    }

    try {
        // const { id } = jwt.verify(token, JWT_SECRET)
        // const user = await User.findById(id)

        const payload = jwt.verify(token, JWT_SECRET)

        if (payload.type !== 'access') {
            return res.status(401).json({message: "Invalid token"})
        }

        const user = await User.findById(payload.userID)
        
        req.user = user
    } catch (error) {
        if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
            throw requestError(401, 'JWT token is not valid')
        }

        throw error
    }

    next()
}

module.exports = { authMiddleware: controllerWrapper(authMiddleware) }