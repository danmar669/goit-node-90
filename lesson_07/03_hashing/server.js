const base64 = require('base-64')
const md5 = require('md5')

async function main () {
    const password = 'very strong password'
    // const encodedString = 'dmVyeSBzdHJvbmcgcGFzc3dvcmQ='
    const encoded = base64.encode(password)
    // const decoded = base64.decode(encodedString)
    // console.log({password, encoded, decoded})
    console.log({password, encoded })

    const hash = md5(password)
    console.log({hash})


}

main()