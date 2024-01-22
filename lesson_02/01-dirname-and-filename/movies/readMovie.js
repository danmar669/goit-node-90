const fs = require('fs/promises')
const path = require('path')

async function readMovie() {
    const filePath = path.join(__dirname, 'movie.txt')

    // абсолютний шлях
    const text = await fs.readFile(filePath, 'utf-8')

    // відносний шлях
    // const text = await fs.readFile('./movie.txt', 'utf-8')
    console.log(text)
}

module.exports = {
    readMovie
}