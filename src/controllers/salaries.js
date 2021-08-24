const { getSalaries } = require("../services/salaries");

exports.getSalariesController = {
    auth: false,
    description: "Get employee's salary",
    async handler(req, h) {
        const { date } = req.query;
        const csv = await getSalaries({ date });

        return h.response(csv)
            .type("text/csv");
    },
};
