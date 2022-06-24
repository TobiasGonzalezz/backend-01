const jwt = require('jsonwebtoken')

const generateToken = () => {
    const token =
        jwt.sign({
        data: 'aca van los datos'
        }, 'SECRET', { expiresIn: "1d" })
    return token
}

module.exports = generateToken
