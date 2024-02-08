// const express = require('express')
// const router = express.Router()

const router = require('express').Router()

const controller = require('../../controllers/auth')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.post('/refresh', controller.refreshToken)

module.exports = router