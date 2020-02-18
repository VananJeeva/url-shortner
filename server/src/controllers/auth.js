const { User } = require('../models/user')

module.exports.register = async function (req, res) {
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
  const { username, password } = req.body
  const user = await User.findOne({
    $or: [
      {
        username: username
      },
      {
        email: username
      }
    ]
  })

  if (!user) {
    return res.send({
      status: 422,
      message: 'Username or password invalid'
    })
  }

  const match = await user.comparePassword(password)

  if (!match) {
    return res.send({
      status: 422,
      message: 'Username or password invalid'
    })
  }
  const token = await user.generateAuthToken()

  return res.send({
    status: 200,
    data: {
      user,
      token
    }
  })
}
