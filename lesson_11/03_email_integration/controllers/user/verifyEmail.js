const { requestError } = require('../../helpers')
const User = require('../../models/users')

const verifyEmail = async (req, res) => {
    const { token } = req.params
    
    const user = await User.findOne({verifyToken: token})

    if (!user) {
        throw requestError(400, 'Verify token is not valid')
    }

    await User.findByIdAndUpdate(user._id, {verified: true, verifyToken: null})

    res.send({message: "Email success verified!"})
}

module.exports = verifyEmail

