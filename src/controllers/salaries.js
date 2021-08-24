const { getSalaries } = require('../services/salaries')

exports.getSalariesController = {
    auth: false,
    description: "Get employee's salary",
    handler: getSalaries
}