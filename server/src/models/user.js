const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const config = require('../config/')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: {
        unique: true
      }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: {
        unique: true
      },
      validate: value => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: 'Invalid Email address' })
        }
      }
    },
    password: {
      type: String,
      required: true
    },
    tokens: [{
      token: {
        type: String,
        required: true
      }
    }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)
userSchema.pre('save', function (next) {
  var user = this

  if (!user.isModified('password')) return next()

  try {
    bcrypt.genSalt(config.bcrypt.rounds).then(salt => {
      bcrypt.hash(user.password, salt).then(hash => {
        user.password = hash
        next()
      })
    })
  } catch (err) {
    next(err)
  }
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = await jwt.sign({ _id: user._id }, config.jwt.key)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

userSchema.methods.comparePassword = async function (password) {
  let match
  try {
    match = await bcrypt.compare(password, this.password)
  } catch (err) {
    return false
  }
  return match
}

module.exports.User = mongoose.model('User', userSchema)
