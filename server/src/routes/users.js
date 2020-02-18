const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth')
const { me, logout, logoutAll } = require('../controllers/users')

router.use(auth)
router.get('/me', me)
router.post('/logout', logout)
router.post('/logout-all', logoutAll)

module.exports = router
