const { tokens } = require('../config/app').jwt
const Token = require('../models/token')
const { v4: uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const { JWT_SECRET: secret } = process.env

const generateAccessToken = (userID) => {
    const payload = {
        userID,
        type: tokens.access.type
    }

    const options = {
        expiresIn: tokens.access.expiresIn
    }

    return jwt.sign(payload, secret, options)
}

const generateRefreshToken = () => {
    const payload = {
        id: uuidv4(),
        type: tokens.refresh.type
    }

    const options = {
        expiresIn: tokens.refresh.expiresIn
    }

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options)
    }
}

const replaceDbRefreshToken = async (tokenID, userID) => {
    await Token.findByIdAndDelete(userID)

    const result = await Token.create({tokenID, userID})

    return result
}

const updateTokens = async (userID) => {
    const accessToken = generateAccessToken(userID)
    const refreshToken = generateRefreshToken()

    await replaceDbRefreshToken(refreshToken.id, userID)

    return { accessToken, refreshToken: refreshToken.token}
}

const authHelper = {
    generateAccessToken,
    generateRefreshToken,
    replaceDbRefreshToken,
    updateTokens
}

module.exports = authHelper