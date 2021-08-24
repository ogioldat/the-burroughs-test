const { getSalaries } = require("../services/salaries");

exports.getSalariesController = {
    auth: false,
    description: "Get employee's salary",
    handler(req, h) {
        const { date } = req.query;
        const csv = getSalaries({ date });

        return h.response(csv)
            // .type("text/csv");
    },
};
