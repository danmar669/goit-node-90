const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs/promises')

const app = express()

app.use(cors())

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'tmp'),
    filename: function(req, file, cb) {
        cb(null, Math.random() + '_' + file.originalname)
    }
})

const upload = multer({storage, limits: {
    fileSize: 1,
}})

app.post('/upload', upload.single('image'), async (req, res, next) => {
    console.log('file', req.file)
    const { filename } = req.file

    try {
        const tmpPath = path.resolve(__dirname, 'tmp', filename)
        const newPath = path.resolve(__dirname, 'public', filename)

        await fs.rename(tmpPath, newPath)
        return res.json({ok: true})
    } catch (error) {
        console.error('error while moving file to /public', error)
        return res.status(500).json({message: "Internal server error"})
    }
})

app.post('/uploadMany', upload.array('image'), async (req, res, next) => {
    console.log('files', req.files)

    try {
        
        return res.json({ok: true})
    } catch (error) {
        console.error('error while moving file to /public', error)
        return res.status(500).json({message: "Internal server error"})
    }

})

app.listen(3000, () => console.log("Server running!"))