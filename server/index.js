const {
    server: { port },
} = require('config')
const server = require('./server')
const logger = require('pino')()

;(async () => {
    try {
        await server.start()
    } catch (err) {
        logger.error(err)
        process.exit(1)
    }

    // TODO use generic error handler

    logger.info(`Server running at port ${port}`)

    process.on('uncaughtException', (err) => {
        throw err
    })

    process.on('unhandledRejection', (err) => {
        logger.error(err)
        process.exit(1)
    })
})()
