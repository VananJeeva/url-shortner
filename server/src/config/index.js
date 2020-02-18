
const dotnev = require('dotenv')

/**
 * Env Configuration
 */
dotnev.config()

const app = require('./app')
const db = require('./db')

const config = {
  app,
  db
}

module.exports = config
