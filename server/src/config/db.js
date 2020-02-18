const env = process.env

module.exports = {
  url: env.DB_URL || 'mongodb://localhost:27017/app',
  user: env.DB_USER || 'root',
  pass: env.DB_PASS || '',
  auth: env.DB_AUTH || 'admin'
}
