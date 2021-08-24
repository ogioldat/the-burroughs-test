const { getSalaries } = require('./salaries')

describe('salaries service', () => {
    describe('getSalaries', () => {
        test('it returns salaries for correct date', async () => {
            const date = new Date('2021-08-22')
            const salaries = getSalaries({ date })

            expect(salaries).toMatchSnapshot(
                `"baseSalary","bonusSalary"
                "2021-08-31","2021-09-15"
                "2021-09-30","2021-10-15"
                "2021-10-29","2021-11-15"
                "2021-11-30","2021-12-15"
                "2021-12-31","2022-01-19"
                "2022-01-31","2022-02-15"
                "2022-02-28","2022-03-15"
                "2022-03-31","2022-04-15"
                "2022-04-29","2022-05-18"
                "2022-05-31","2022-06-15"
                "2022-06-30","2022-07-15"
                "2022-07-29","2022-08-15"
            `
            )
        })
    })
})