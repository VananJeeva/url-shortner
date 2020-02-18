const env = process.env

module.exports = {
  rounds: env.BCRYPT_SALT_ROUNDS-0 || 10
}
