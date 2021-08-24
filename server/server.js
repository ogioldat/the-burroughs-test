const Hapi = require('@hapi/hapi')
const { server: { port, host, cors } } = require('config')

const server = new Hapi.Server({
    port,
    host,
    routes: { cors }
})

module.exports = server