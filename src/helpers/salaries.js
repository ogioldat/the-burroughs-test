const { endOfMonth, addMonths } = require('date-fns')
const {
    isWeekDay,
    getNearestDateByDOW,
    nthDayOfTheMonth,
} = require('../utils/dates')

exports.getBaseSalaryDate = (date) => {
    const lastDayOfMonth = endOfMonth(date)

    if (isWeekDay(lastDayOfMonth)) {
        return getNearestDateByDOW(lastDayOfMonth, 'Friday')
    }
    return lastDayOfMonth
}

exports.getBonusSalaryDate = (date) => {
    const nextMonthsDay = addMonths(date, 1)
    const fifteenthDay = nthDayOfTheMonth(nextMonthsDay, 15 - 1)

    if (isWeekDay(fifteenthDay)) {
        return getNearestDateByDOW(fifteenthDay, 'Wednesday', {
            pastDates: false,
        })
    }
    return fifteenthDay
}
