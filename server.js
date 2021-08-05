/* eslint-disable no-console */
const express = require('@feathersjs/express')
// const logger = require('./api/logger.js')
const app = require('./api/app.js')
const port = app.get('port')

const router = express()

router.use('/api', app)

// Host static files from the current folder
router.use(express.static(__dirname + '/public'))

const server = router.listen(port)

process.on('unhandledRejection', (reason, p) =>
  console.error('Unhandled Rejection at: Promise ', p, reason)
)

server.on('listening', () =>
  console.info('Feathers application started on http://localhost:%d', port)
)
