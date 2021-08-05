const mongoose = require('mongoose')
const service = require('feathers-mongoose')
const taskModel = require('./tasks.model.js')
const hooks = require('./tasks.hooks.js')

module.exports = function (app) {

  app.use('/tasks', service({
    Model: taskModel,
    paginate: {
      default: 20,
    }
  }))

  app.service('tasks').hooks(hooks)

  return taskModel
}