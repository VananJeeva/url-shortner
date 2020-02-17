const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Initiate configuration
dotenv.config()

const env = process.env

const app = express()
var whitelist = '*'
var corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.static('./static'))
app.use(bodyParser.json())

mongoose.connect(env.DB_URL, {
  useNewUrlParser: true,
  user: env.DB_USER,
  pass: env.DB_PASS,
  authSource: env.DB_AUTH
})

app.listen(env.APP_PORT, () => console.log(`App Running in Port ${env.APP_PORT}`))
