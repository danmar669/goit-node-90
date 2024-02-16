const { WebSocketServer } = require('ws')

const PORT = 5000

const server = new WebSocketServer({
    port: PORT
})

server.on("connection", (socket) => {
    console.log("New client connected")

    socket.send('Welcome to chat!')

    socket.on('message', (data) => {
        console.log('received ', data)
    })

    setInterval(() => {
        socket.send('Bang, band. It\'s backend message')
    }, 1000)
})

console.log(`Listening on port ${PORT}`)