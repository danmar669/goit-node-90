const http = require('http')

const server = http.createServer((requset, response) => {
    const { url } = requset
    if (url === '/') {
        response.write("<h2>Home page</h2>")
    } else if (url === "/contacts") {
        response.write('<h2>Contact page</h2>')
    } else {
        response.write('<h2>Not found</h2>')
    }
    response.end()
})

server.listen(3000, () => {
    console.log('Server started')
})