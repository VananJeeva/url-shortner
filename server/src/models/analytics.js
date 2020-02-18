const mongoose = require('mongoose')

const analyticsSchema = new mongoose.Schema(
  {
    url: {
      type: mongoose.Types.ObjectId,
      ref: 'url',
      required: true
    },
    ip: {
      type: String
    },
    browser: {
      type: String
    },
    platform: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports.Analytics = mongoose.model('Analytics', analyticsSchema)
