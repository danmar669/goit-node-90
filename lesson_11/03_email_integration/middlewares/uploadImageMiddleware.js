const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: path.resolve('tmp'),
    filename: function(req, file, cb) {
        cb(null, Math.random() + "_" + file.originalname)
    }
})

const upload = multer({
    storage
})

module.exports = upload