const { User } = require('../models/user')

module.exports.signup = async function (req, res) {
  const data = req.body
  let user
  try {
    user = await User.create(data)
  } catch (e) {
    return res.send({
      status: 500,
      message: 'Internal Server Error'
    })
  }

  return res.send({
    status: 200,
    data: {
      user
    }
  })
}

module.exports.authenticate = async function (req, res) {
  const { user, password } = req.body
  console.log(user)
  return res.send({
    status: 200,
    data: {
      user
    }
  })
}
