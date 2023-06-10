const moment = require('moment');

const dateRangeForWeek = (weekNumber) => {
    const start = moment().subtract(weekNumber, 'weeks').startOf('week').format();
    const end = moment().subtract(weekNumber, 'weeks').endOf('week').format();

    return [start, end]
}

const dateRangeForDate = () => {
    const start = moment().startOf('day').format();
    const end = moment().endOf('day').format();

    return [start, end]
}

const dateRangeForLastSevenDays = () => {
    const start = moment().subtract(8, 'days').startOf('day').format();
    const end = moment().subtract(1, 'day').endOf('day').format();

    return [start, end]
}
module.exports = {
    dateRangeForWeek,
    dateRangeForDate,
    dateRangeForLastSevenDays
}