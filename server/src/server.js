const _ = require('lodash')
const app = require('./app')
const db = require('./db')
var config = require('./config')

module.exports.start = async (options) => {
  /**
   * Merge run time configuration to the config
   */
  config = _.merge(config, options)

  /**
   * Connect to database
   */
  await db.connect(config)

  /**
   * Start the server.
   */
  await app.start(config)

  process.send = process.send || function () { }
  process.send('ready')

  /**
   * Process the node signals
   */
  const sigs = ['SIGINT', 'SIGTERM', 'SIGQUIT']
  sigs.forEach(sig => {
    process.on(sig, async () => {
      /**
       * Stop the app from accepting new connections and finishes existing connections.
       */
      try {
        await app.stop()
      } catch (e) {
        console.log(e)
      }
      /**
       * Disconnect database connection and exit with success
       */
      await db.disconnect()
    })
  })
}

module.exports.stop = async () => {
  await app.stop()
  await db.disconnect()
}
