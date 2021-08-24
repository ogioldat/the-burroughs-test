const { getSalariesController } = require('../src/controllers/salaries')

module.exports = [
    {
        method: 'GET',
        path: '/salaries',
        config: getSalariesController
    }
]