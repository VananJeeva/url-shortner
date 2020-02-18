const api = require('./api')

module.exports.apply = function (app) {
  app.use('/api', api)
}
