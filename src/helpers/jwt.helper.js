const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign(payload, '1Q2W3E4R', {
    expiresIn: '1h'
})

module.exports = {
    sign
}