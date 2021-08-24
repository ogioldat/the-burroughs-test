const { endOfMonth, addMonths } = require("date-fns");
const { Parser } = require("json2csv");
const {
    isWeekDay,
    getNearestDateByDOW,
    format,
    nthDayOfTheMonth,
} = require("../utils/dates");

const getBaseSalaryDate = (date) => {
    const lastDayOfMonth = endOfMonth(date);

    if (isWeekDay(lastDayOfMonth)) {
        return getNearestDateByDOW(lastDayOfMonth, "Friday");
    }
    return lastDayOfMonth;
};

const getBonusSalaryDate = (date) => {
    const nextMonthsDay = addMonths(date, 1)
    const fifteenthDay = nthDayOfTheMonth(nextMonthsDay, 15 - 1);

    if (isWeekDay(fifteenthDay)) {
        return getNearestDateByDOW(fifteenthDay, "Wednesday", {
            pastDates: false,
        });
    }
    return fifteenthDay;
};

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
