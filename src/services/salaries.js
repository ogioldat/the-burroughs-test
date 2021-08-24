const { addMonths } = require("date-fns");
const { Parser } = require("json2csv");
const { format } = require("../utils/dates");
const { getBaseSalaryDate, getBonusSalaryDate } = require("../helpers/salaries");

exports.getSalaries = (input) => {
    let currentDate = input.date;
    const monthsInterval = 12;

    const fields = ["baseSalary", "bonusSalary"];
    const json2csv = new Parser({ fields });

    const result = [];

    for (let i = 0; i < monthsInterval; i++) {
        const baseSalaryDate = getBaseSalaryDate(currentDate);
        const bonusSalaryDate = getBonusSalaryDate(currentDate);

        result.push({
            baseSalary: format(baseSalaryDate),
            bonusSalary: format(bonusSalaryDate),
        });

        currentDate = addMonths(currentDate, 1);
    }

    const csv = json2csv.parse(result);

    return csv;
};
