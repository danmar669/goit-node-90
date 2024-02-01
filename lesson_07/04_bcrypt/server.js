const bcrypt = require('bcrypt')

async function main () {
    const password = 'very strong password'

    const passwordArr = [
        '$2b$10$LP/xC/7QIPZbYlKbffvbzuPVJgK.IgVacNikCorz8AkSCLzYpHW5e',
        '$2b$10$i5FL0F/rW.IeNqpSL3y1JO/9wR6BJ.Qa97CzjyMlf7YkUkREwJktC',
        '$2b$10$lm/pIVOJ5H1qKcglvdkfjuOXVK37AF4PW6zltnHEPPIHybUO141Hm',
        '$2b$10$Csn0C6ssCCa0QJgwz9JeGOi9fjGdDqrnfS9r8g8mMCRw3NNR7x0H6',
    ]

    const staledSalt = '$2b$10$M64dFBpuChN9SnrzCS5uSe'

    const salt = await bcrypt.genSalt()
    console.log({salt})

    const hashedPassword = await bcrypt.hash(password, salt)
    console.log({hashedPassword})

    const isSame = await bcrypt.compare('very strong password', hashedPassword)
    // const isSame = await bcrypt.compare('very strong password', '$2b$10$LP/xC/7QIPZbYlKbffvbzuPVJgK.IgVacNikCorz8AkSCLzYpHW5e')
    // const isSame = await bcrypt.compare('very strong password', '$2b$10$i5FL0F/rW.IeNqpSL3y1JO/9wR6BJ.Qa97CzjyMlf7YkUkREwJktC')
    // const isSame = await bcrypt.compare('very strong password', '$2b$10$lm/pIVOJ5H1qKcglvdkfjuOXVK37AF4PW6zltnHEPPIHybUO141Hm')
    console.log({isSame})
}

main()