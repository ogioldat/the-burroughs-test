const { addMonths, parseISO } = require('date-fns')
const { Parser } = require('json2csv')
const { format } = require('../utils/dates')
const Joi = require('../validation/joi')
const { getBaseSalaryDate, getBonusSalaryDate } = require('../helpers/salaries')

const getSalariesSchema = Joi.object({
    date: Joi.date()
        .format('YYYY-MM-DD')
        .optional()
        .default(format(new Date())),
})

exports.getSalaries = async (input) => {
    input.date = parseISO(input.date)

    await getSalariesSchema.validate(input)

    let { date: currentDate } = input
    const monthsInterval = 12

    const fields = ['baseSalary', 'bonusSalary']
    const json2csv = new Parser({ fields })

    const result = []

    for (let i = 0; i < monthsInterval; i++) {
        const baseSalaryDate = getBaseSalaryDate(currentDate)
        const bonusSalaryDate = getBonusSalaryDate(currentDate)

        result.push({
            baseSalary: format(baseSalaryDate),
            bonusSalary: format(bonusSalaryDate),
        })

        currentDate = addMonths(currentDate, 1)
    }

    const csv = json2csv.parse(result)

    return csv
}
