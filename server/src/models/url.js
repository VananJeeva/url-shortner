const mongoose = require('mongoose')
const validator = require('validator')
const shortid = require('shortid')

const config = require('../config/')

const urlSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    originalUrl: {
      type: String,
      required: true,
      trim: true,
      validate: value => {
        if (!validator.isURL(value)) {
          throw new Error({ error: 'Invalid URL' })
        }
      }
    },
    code: {
      type: String,
      required: true,
      unique: true,
      default: shortid.generate,
      index: {
        unique: true
      }
    },
    hits: {
      type: Number,
      default: 0
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

urlSchema.virtual('tinyurl').get(function () {
  return `${config.app.url}/${this.code}`
})

module.exports.Url = mongoose.model('Url', urlSchema)
