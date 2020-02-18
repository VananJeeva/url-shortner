const express = require('express')
const router = express.Router()

const auth = require('./auth')
const users = require('./users')
const urls = require('./urls')

router.use('/auth', auth)
router.use('/users', users)
router.use('/urls', urls)

module.exports = router
