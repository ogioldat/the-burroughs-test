const { getBaseSalaryDate, getBonusSalaryDate } = require('./salaries')
const { format } = require('../utils/dates')

describe('salaries helpers', () => {
    describe('getBaseSalaryDate', () => {
        test('it returns base salary date', async () => {
            const date = new Date('2021-10-14')
            const baseDate = getBaseSalaryDate(date)

            expect(format(baseDate)).toEqual('2021-10-29')
        })

        test('it returns base salary date for weekends', async () => {
            const date = new Date('2021-02-12')
            const baseDate = getBaseSalaryDate(date)

            expect(format(baseDate)).toEqual('2021-02-26')
        })
    })

    describe('getBonusSalaryDate', () => {
        test('it returns correct bonus date', async () => {
            const date = new Date('2021-02-20')
            const bonusDate = getBonusSalaryDate(date)

            expect(format(bonusDate)).toEqual('2021-03-15')
        })

        test('it returns correct date for weekends', async () => {
            const date = new Date('2021-12-12')
            const bonusDate = getBonusSalaryDate(date)

            expect(format(bonusDate)).toEqual('2022-01-19')
        })
    })
})
