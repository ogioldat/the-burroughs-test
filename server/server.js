const Hapi = require('@hapi/hapi')
const { server: { port, host, cors } } = require('config')
const routes = require('../routes')

const server = new Hapi.Server({
    port,
    host,
    routes: { cors }
})

server.route(routes)

module.exports = server