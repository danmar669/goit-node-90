const http = require('http')
const { Server } = require('socket.io')
const app = require('express')()
const path = require('path')

const httpServer = http.createServer(app)
const io = new Server(httpServer)

const PORT = 5000

io.on('connection', (socket) => {
    socket.on('chatMessage', (message) => {
        socket.broadcast.emit('chatMessage', message)
    })
})

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/index.html'))
})

httpServer.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log(`Listening on port ${PORT}`)
})