module.exports = function (app) {
    const mongoOptions = app.get('mongoOptions')

    const mongoose = require('mongoose')
  
    // Make Mongoose use the ES6 promise
    mongoose.Promise = global.Promise
  
    // Connect to a local database called `feathers`
    mongoose.connect(app.get('mongodb'), mongoOptions)
}