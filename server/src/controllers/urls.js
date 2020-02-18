const { Url } = require('../models/url')
const shortid = require('shortid')

module.exports.create = async function (req, res) {
  const { originalUrl } = req.body

  let code
  let unique = false
  while (!unique) {
    code = await shortid.generate()
    const isExists = await Url.findOne({ code })
    unique = !isExists
  }

  const url = await Url.create({
    user: req.user._id,
    originalUrl,
    code
  })

  return res.send({
    status: 200,
    data: {
      url
    }
  })
}

module.exports.update = async function (req, res) {
  const _id = req.params._id
  const data = req.body

  const url = await Url.findOneAndUpdate(
    {
      _id
    },
    {
      $set: data
    },
    {
      new: true
    }
  )

  return res.send({
    status: 200,
    data: {
      url
    }
  })
}

module.exports.delete = async function (req, res) {
  const _id = req.params._id

  await Url.deleteOne(
    {
      _id
    }
  )

  return res.send({
    status: 200,
    message: 'Deleted successfully'
  })
}

module.exports.details = async function (req, res) {
  const _id = req.params._id

  const url = await Url.findOne(
    {
      _id
    }
  )

  return res.send({
    status: 200,
    data: {
      url
    }
  })
}

module.exports.list = async function (req, res) {
  const urls = await Url.find({})

  return res.send({
    status: 200,
    data: {
      urls
    }
  })
}

module.exports.redirect = async function (req, res) {
  const { code } = req.params
  const url = await Url.findOne({ code })

  if (url) {
    return res.status(301).redirect(url.originalUrl)
  } else {
    return res.status(404).send('Page not found')
  }
}

module.exports.update
