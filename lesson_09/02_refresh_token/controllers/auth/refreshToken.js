const jwt = require('jsonwebtoken')
const authHelper = require('../../helpers/auth')
const Token = require('../../models/token')
const { requestError } = require('../../helpers')
const { JWT_SECRET: secret } = process.env

const refreshToken = async (req, res, next) => {
    const { refreshToken } = req.body
    let payload

    try {
        payload = jwt.verify(refreshToken, secret)
        if (payload.type !== "refresh") {
            return res.status(400).json({message: 'Invalid Token'})
        }
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw requestError(401, "Invalid Token")
        }
        if (error instanceof jwt.TokenExpiredError) {
            throw requestError(401, 'Token expired')
        }
    }

    const token = await Token.findOne({tokenID: payload.id})

    if (token === null) {
        return res.status(400).json({message: "Invalid token"})
    }

    const newTokens = await authHelper.updateTokens(token.userID)

    res.json(newTokens)
}

module.exports = refreshToken