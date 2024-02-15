const User = require('../../models/users')
const { requestError, sendEmail } = require('../../helpers')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')

const registration = async (req, res, next) => {
    const { email, password } = req.body
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    const verifyToken = v4()

    try {
        const result = await User.create({
            email,
            password: hashedPassword,
            verifyToken,
        })

        await sendEmail({
            to: email,
            subject: "Please confirm your email",
            html: `<a href='localhost:3000/api/users/verify/${verifyToken}'>Confirm your email</a>`
        })
        
        res.status(201).json({
            id: result._id,
            email
        })
    } catch (error) {
        console.log(error.code)
        // if (error.message.includes('E11000')) {
        if (error.code === 11000) {
            throw requestError(409, 'User with this email already exist!')
        }
        throw error
    }
}

module.exports = registration