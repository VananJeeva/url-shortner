const api = require('./api')

const urls = require('../controllers/urls')

module.exports.apply = function (app) {
  app.use('/api', api)

  app.get('/:code', urls.redirect)
}
