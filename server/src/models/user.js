const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)
UserSchema.pre('save', async function (next) {
  var user = this

  if (!user.isModified('password')) return next()

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    const hash = bcrypt.hash(user.password, salt)
    user.password = hash

    next()
  } catch (err) {
    next(err)
  }
})

UserSchema.methods.comparePassword = async function (password) {
  let match
  try {
    match = await bcrypt.compare(password, this.password)
  } catch (err) {
    return false
  }
  return match
}

module.exports.User = mongoose.model('User', UserSchema)
