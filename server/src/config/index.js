
const dotnev = require('dotenv')

/**
 * Env Configuration
 */
dotnev.config()

const app = require('./app')
const db = require('./db')
const jwt = require('./jwt')
const bcrypt = require('./bcrypt')

const config = {
  app,
  db,
  jwt,
  bcrypt
}

module.exports = config
