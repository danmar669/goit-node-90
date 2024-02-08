const User = require('../../models/users')
const { requestError } = require('../../helpers')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authHelper = require('../../helpers/auth')

const { JWT_SECRET } = process.env
// console.log('JWT_SECRET-', JWT_SECRET)

const login = async (req, res, next) => {
    const { email, password } = req.body

    const user = await User.findOne({email})

    if (!user) {
        // throw requestError(401, 'Email is not valid')
        throw requestError(401, 'Wrong credentials')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
        // throw requestError(401, 'Wrong password')
        throw requestError(401, 'Wrong credentials')
    }

    // const token = jwt.sign({id: user.id}, JWT_SECRET, {
    //     expiresIn: '5m'
    // })

    const tokens = await authHelper.updateTokens(user._id)

    res.json(tokens)
}

module.exports = login