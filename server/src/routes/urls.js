const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth')
const urls = require('../controllers/urls')

router.use(auth)
router.post('/', urls.create)
router.post('/:_id', urls.update)
router.delete('/:_id', urls.delete)
router.get('/:_id', urls.details)
router.get('/', urls.list)

module.exports = router
