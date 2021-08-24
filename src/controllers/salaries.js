const { getSalaries } = require('../services/salaries')

exports.getSalariesController = {
    auth: false,
    description: "Get employee's salary",
    async handler(req, h) {
        const { date } = req.query

        try {
            const csv = await getSalaries({ date })

            return h.response(csv)
                .type('text/csv')
                .header('Content-Type', 'text/csv')
                .header('Content-Disposition', 'attachment;filename=salaries.csv')
        } catch (error) {
            return h.response({ error: `Invalid date param, please provide "date" param in the following format: YYYY-MM-DD` }).code(400)
        }
    },
}
