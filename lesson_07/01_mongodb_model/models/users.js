const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'User email is not valid']
        },
        password: {
            type: String,
            minLength: [6, 'Password should be at least 6 characters long']
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('user', userSchema)

module.exports = User