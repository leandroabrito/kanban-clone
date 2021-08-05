module.exports = function(app) {
    app.configure(require('./services/tasks/tasks.service.js'))
    app.configure(require('./services/columns/columns.service.js'))
}