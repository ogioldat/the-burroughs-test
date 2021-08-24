const { endOfMonth, addMonths } = require('date-fns')
const { Parser } = require('json2csv')
const { isWeekDay, getNearestDateByDOW, format } = require('../utils/dates')

const getBaseSalaryDate = (date) => {
    const lastDayOfMonth = endOfMonth(date)

    if (isWeekDay(lastDayOfMonth)) {
        return getNearestDateByDOW(lastDayOfMonth, 'Friday')
    }
    return lastDayOfMonth
}

exports.getSalaries = (input) => {
    let currentDate = input.date
    const monthsInterval = 12

    const fields = ['baseSalary', 'bonusSalary']
    const json2csv = new Parser({ fields })

    const result = []

    for (let i = 0; i < monthsInterval; i++) {
        const baseSalaryDate = getBaseSalaryDate(currentDate)

        result.push({
            baseSalary: format(baseSalaryDate),
            bonusSalary: null
        })

        currentDate = addMonths(currentDate, 1)
    }

    const csv = json2csv.parse(result)

    return csv
}