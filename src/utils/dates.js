const { format, subDays, addDays, startOfMonth } = require("date-fns");

const WEEKEND_DAYS = ["Saturday", "Sunday"];

exports.getDayName = (date = new Date()) => format(date, "EEEE");

exports.isWeekDay = (date = new Date()) =>
    WEEKEND_DAYS.includes(this.getDayName(date));

exports.getNearestDateByDOW = (
    date = new Date(),
    dow = "Monday",
    { pastDates } = { pastDates: true }
) => {
    const traverseDay = pastDates ? subDays : addDays
    
    while (this.getDayName(date).toLowerCase() !== dow.toLowerCase()) {
        date = traverseDay(date, 1);
    }

    return date;
};

exports.format = (date = new Date()) => format(date, "yyyy-MM-dd");

exports.nthDayOfTheMonth = (date = new Date(), n = 0) => {
    const firstDay = startOfMonth(date)
    return addDays(firstDay, n)
}