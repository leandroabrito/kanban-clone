const mongoose = require('mongoose')
//const { Schema } = require('mongoose')

const Schema = mongoose.Schema
const TaskSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  column_id: {
    type: mongoose.ObjectId,
    required: true
  },

  checked: {
    type: Boolean,
    default: false
  },

  text: {
    type: String,
    required: true
  }

})
const Model = mongoose.model('Task', TaskSchema)

module.exports = Model