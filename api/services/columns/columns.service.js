const mongoose = require('mongoose')
const service = require('feathers-mongoose')
const columnModel = require('./columns.model.js')
const hooks = require('./columns.hooks.js')

module.exports = function (app) {

  app.use('/columns', service({
    Model: columnModel,
    paginate: {
      default: 20,
    }
  }))

  app.service('columns').hooks(hooks)

  return columnModel
}