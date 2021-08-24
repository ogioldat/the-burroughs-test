const { format, subDays } = require("date-fns");

const WEEKEND_DAYS = ["Saturday", "Sunday"];

exports.getDayName = (date = new Date()) => format(date, "EEEE");

exports.isWeekDay = (date = new Date()) => WEEKEND_DAYS.includes(this.getDayName(date));

exports.getNearestDateByDOW = (date = new Date(), dow = "Monday") => {
    while (
        this.getDayName(date).toLowerCase() !== dow.toLowerCase()
    ) {
        date = subDays(date, 1)
    }

    return date
};

exports.format = (date = new Date()) => format(date, 'yyyy-MM-dd')