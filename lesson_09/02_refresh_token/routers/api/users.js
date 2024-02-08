const router = require('express').Router()
const userController = require("../../controllers/user")
const { authMiddleware }= require('../../middlewares/authMiddleware')

router.post('', authMiddleware, userController.addBook)
router.get('/books', authMiddleware, userController.getBooks)
router.get('/info', authMiddleware, userController.getInfo)

module.exports = router