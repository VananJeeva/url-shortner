const env = process.env

module.exports = {
  key: env.JWT_KEY || 'KeyForJWT2020'
}
