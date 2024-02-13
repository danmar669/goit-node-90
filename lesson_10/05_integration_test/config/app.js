module.exports = {
    jwt: {
        tokens: {
            access: {
                type: 'access',
                expiresIn: '5m'
            },
            refresh: {
                type: 'refresh',
                expiresIn: '10m'
            }
        }
    },
    multer: {
        destination: '',
    },
    logger: {
        type: '',
    },
    
}