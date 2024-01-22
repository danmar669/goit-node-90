const express = require('express')
const path = require('path')

const app = express()

const filesPath = __dirname + '/public'

app.use(express.static('public'))
app.use('/', express.static(filesPath))
app.use('/images', express.static(filesPath))

app.get('/home', (req, res) => {
    res.send('<h2>Home page</h2>')
})

app.get('/old-home', (req, res) => {
    res.redirect(301, '/home')
})

app.get('/some-page', (req, res) => {
    res.redirect('/home')
})

app.listen(3000, () => console.log('Server started'))
