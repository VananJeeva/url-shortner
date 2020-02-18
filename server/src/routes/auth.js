const express = require('express')
const router = express.Router()

const { register, authenticate } = require('../controllers/auth')

router.post('/register', register)
router.post('/authenticate', authenticate)

module.exports = router
