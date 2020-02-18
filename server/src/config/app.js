const env = process.env

module.exports = {
  name: env.APP_NAME || 'app',
  env: env.NODE_ENV || 'development',
  host: env.APP_HOST || '0.0.0.0',
  port: env.APP_PORT || '3001',
  url: env.APP_URL || `${env.APP_HOST}:${env.APP_PORT}`
}
