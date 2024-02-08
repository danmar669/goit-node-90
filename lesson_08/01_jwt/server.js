const jwt = require('jsonwebtoken')

const JWT_SECRET = 'WARNING secret information'

async function main() {
    const payload = { id: "asdfpoiuqwfda32908", email: 'johnd@mail.com'}
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "15s" })
    console.log({token})


    // check if token valid
    try {
        const isValid = jwt.verify(token, JWT_SECRET)
        console.log({isValid})
    } catch (error) {
        console.error('verification error', error)
    }


    // expired error 
    try {
        const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFzZGZwb2l1cXdmZGEzMjkwOCIsImVtYWlsIjoiam9obmRAbWFpbC5jb20iLCJpYXQiOjE3MDY4MTA3NzgsImV4cCI6MTcwNjgxMDc5M30.iqN1IMJ7wH1C-YGrCi86NBx-lvzG4rwlzSzdXmT9u0k'
        const isExpired = jwt.verify(expiredToken, JWT_SECRET)
        console.log({isExpired})
    } catch (error) {
        console.error('verification error', error)
    }
}

main()