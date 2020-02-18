const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth')
const { me } = require('../controllers/users')

router.use(auth)
router.get('/me', me)

module.exports = router
