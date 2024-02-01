const User = require('../../models/users')
const { requestError } = require('../../helpers')
const bcrypt = require('bcrypt')

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

    res.json({token: '<TOKEN>'})
}

module.exports = login