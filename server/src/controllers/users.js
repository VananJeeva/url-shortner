const User = require('../models/user')

module.exports.me = async function (req, res) {
  const user = req.user

  return res.send({
    status: 200,
    data: {
      user
    }
  })
}
