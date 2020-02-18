const mongoose = require('mongoose')

/**
 * @namespace @app
 * @module db
 */

/**
 * Mongoose instance export
 *
 * @var {mongoose} mongoose
 */
module.exports.instance = mongoose

/**
 * Connect to MongoDB using mongoose
 *
 * @async
 * @function connect
 * @param {Object} config
 * @return {Promise<string>} connection promise function
 * @since 1.0.0.0
 */
module.exports.connect = async (config) => {
  try {
    await mongoose
      .connect(config.db.url, {
        auth: {
          authSource: config.db.auth
        },
        user: config.db.user,
        pass: config.db.pass,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true
      })
    console.log('DB Connection : Connected')
  } catch (e) {
    console.log('DB Connection : Error', e)
    process.exit()
  }
}

/**
 * Disconnect from MongoDB using mongoose
 *
 * @function disconnect
 * @returns {void} void
 * @since 1.0.0.0
 *
 */
module.exports.disconnect = async () => {
  await mongoose.connection.close()
  console.log('DB Connection : Disconnected')
}
