const jwt = require('jsonwebtoken')
const { User } = require('../models/user')
const config = require('../config/')

const auth = async (req, res, next) => {
  const authHeader = req.header('Authorization')
  if (!authHeader) {
    return res.send({
      status: 401,
      message: 'Token invalid'
    })
  }
  const token = req.header('Authorization').replace('Bearer ', '')
  const data = jwt.verify(token, config.jwt.key)
  try {
    const user = await User.findOne({ _id: data._id, 'tokens.token': token })
    if (!user) {
      return res.send({
        status: 401,
        message: 'Token invalid'
      })
    }
    req.user = user
    req.token = token
    next()
  } catch (error) {
    return res.send({
      status: 401,
      message: 'Token invalid'
    })
  }
}
module.exports = auth
