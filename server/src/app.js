
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { apply: routeApply } = require('./routes')

const app = express()

var whitelist = '*'
var corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routeApply(app)

module.exports.start = async function (config) {
  app.listen(config.app.port, () => console.log(`App Running in Port ${config.app.port}`))
}

module.exports.stop = async function () {
  app.close()
}
