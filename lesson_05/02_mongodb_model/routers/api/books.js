const express = require('express')
const validateBody = require('../../helpers/validateBody')
const bookController = require('../../controllers/book')
const joi = require('joi')

const bookShema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
})

const router = express.Router()

router.get('', bookController.getAll)
router.get('/:id', bookController.getById)
router.post('', validateBody(bookShema), bookController.add)
router.put('/:id', bookController.updateById)
router.delete('/:id', bookController.removeById)

module.exports = router