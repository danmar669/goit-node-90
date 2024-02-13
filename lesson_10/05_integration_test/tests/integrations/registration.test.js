require('dotenv').config()
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const User = require('../../models/users')

const { DB_HOST_TEST } = process.env

describe('test user registration', () => {
    beforeAll(async () => {
        await mongoose
            .connect(DB_HOST_TEST)
            .then(() => console.log('DB Connected'))
            .catch((err) => {
                console.error(err)
            })

        await User.deleteMany()
    })

    it('should registration new user', async () => {
        const response = await request(app).post('/api/auth/registration').send({
            email: 'user1@gmail.com',
            password: '123456'
        })

        expect(response.statusCode).toBe(201)
        expect(response.body.email).toBe('user1@gmail.com')
    })

    it('should not registration the same user 2 times', async() => {
        await request(app).post('/api/auth/registration').send({
            email: 'user2@gmail.com',
            password: '123456'
        })

        const response = await request(app).post('/api/auth/registration').send({
            email: 'user2@gmail.com',
            password: '123456'
        })

        expect(response.statusCode).toBe(409)
        expect(response.body.message).toBe('User with this email already exist!')
    })

    afterAll(async() => {
        await mongoose
            .disconnect(DB_HOST_TEST)
            .then(() => console.log("DB disconnected"))
    })
})