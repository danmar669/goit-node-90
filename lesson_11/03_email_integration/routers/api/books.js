const express = require('express')
const validateBody = require('../../helpers/validateBody')
const bookController = require('../../controllers/book')
const joi = require('joi')
const upload = require('../../middlewares/uploadImageMiddleware')

const bookShema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
})

const updateBookFavoriteShema = joi.object({
    favorite: joi.boolean().required()
})


const router = express.Router()

router.get('', bookController.getAll)
router.get('/:id', bookController.getById)
router.get('/filter', bookController.getAll)
// router.post('', validateBody(bookShema), bookController.add)
router.post('', bookController.add)
router.put('/:id', bookController.updateById)
router.put('/favorite/:id', validateBody(bookShema), bookController.updateById)
router.put('/:id/image', upload.single('image'), bookController.uploadImage)
router.delete('/:id', bookController.removeById)

module.exports = router