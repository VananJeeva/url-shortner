module.exports.me = async function (req, res) {
  const user = req.user

  return res.send({
    status: 200,
    data: {
      user
    }
  })
}

module.exports.logout = async function (req, res) {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send({
      status: 200,
      message: 'Logout successfully'
    })
  } catch (error) {
    res.send({
      status: 500,
      message: 'Internal server error'
    })
  }
}

module.exports.logoutAll = async function (req, res) {
  try {
    req.user.tokens.splice(0, req.user.tokens.length)
    await req.user.save()
    res.send({
      status: 200,
      message: 'Logout successfully'
    })
  } catch (error) {
    res.send({
      status: 500,
      message: 'Internal server error'
    })
  }
}
