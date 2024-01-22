import { readFile } from 'fs/promises'
import { join } from 'path'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function readMovie() {
    const filePath = join(__dirname, 'movie.txt')

    // абсолютний шлях
    const text = await readFile(filePath, 'utf-8')

    // відносний шлях
    // const text = await fs.readFile('./movie.txt', 'utf-8')
    console.log(text)
}

export default readMovie