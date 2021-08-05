const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
// const socketio = require('@feathersjs/socketio')
const config = require('@feathersjs/configuration')

// Creates an ExpressJS compatible Feathers application
const app = express(feathers())

app.configure(config())

// Parse HTTP JSON bodies
app.use(express.json())
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }))
// Add REST API support
app.configure(express.rest())
// Configure Socket.io real-time APIs
// app.configure(socketio())
app.configure(require('./database.js'))

app.configure(require('./services.js'))

// Polimorfismo
// const app = {
//     get (param1, callback) {
//         if (arguments.length === 1) {
//             return config[param1]
//         }
//         else if (arguments.length === 2) {
//             // configura rotax
//         }
//     }
// }

// app.get('/config/:name', function (req, res) {
//     const app = req.app
//     const obj = app.get(req.params.name)
//     res.json(obj)
// })

// Register a nicer error handler than the default Express one
app.use(express.errorHandler())

// Start the server
// app.listen(app.get('port')).on('listening', () =>
//   console.log(`Feathers server listening on http://localhost:${app.get('port')}`)
// )
 
module.exports = app