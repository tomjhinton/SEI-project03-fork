const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 280
  }
}, {
  timestamps: true, // this adds `createdAt` and `updatedAt` properties
  toJSON: {
    // whenever the comment is converted to JSON
    transform(doc, json) {
      delete json.__v
      return json
    }
  }
})

const eventSchema = new mongoose.Schema({

  name: {
    type: String,
    required: 'Please enter a name for the event'
  },
  venue: {
    type: String,
    required: 'Please enter a venue for the event'
  },
  postcode: {
    type: String
  },
  skId: {
    type: String
  },
  date: {
    type: String,
    required: 'Please enter a date for the event'
  },
  start: {
    type: String
  },
  finish: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  artist: {
    type: Array,
    required: 'Please enter the artists that are playing!'

  },
  price: {
    type: Number,
    required: 'Please specify a price'
  },
  description: {
    type: String,
    required: 'Please enter a description of the event'
  },
  minimumAge: {
    type: Number,
    required: 'Please specify the minimum age'
  },
  modifiedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  comments: [ commentSchema ]

}, {
  toJSON: {
    virtuals: true,
    // whenever the user is converted to JSON
    transform(doc, json) {
      delete json.__v
      return json
    }
  }
})


eventSchema.plugin(uniqueValidator) // this makes the unqiue error nicer...

// same as `export default mongoose.model(...)`
module.exports = mongoose.model('Event', eventSchema)
