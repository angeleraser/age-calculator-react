function getMonthDays(year) {
  return {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
}

function isCurrentYear(year) {
  return year === new Date().getFullYear();
}

function isCurrentMonth(month) {
  return month === new Date().getMonth() + 1;
}

function isValidDay(day, month, year) {
  const daysCount = getMonthDays(year);
  if (day === 0 || !isValidMonth(month) || !isValidYear(year)) return false;
  return day >= 1 && day <= daysCount[month];
}

function isValidMonth(month) {
  return month >= 1 && month <= 12;
}

function isValidYear(year = 0) {
  return year >= 0 && year <= new Date().getFullYear();
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getYearDaysCount(year) {
  return isLeapYear(year) ? 364 : 365;
}

function isValidDate(month, year) {
  return isValidYear(year) && isValidMonth(month);
}

function getElapsedDaysOfTheCurrentYear() {
  let currentYearDays = 0;
  const currentMonth = new Date().getMonth();

  for (let index = 0; index <= currentMonth; index++) {
    currentYearDays +=
      index === currentMonth
        ? new Date().getDate()
        : getMonthDays(new Date().getFullYear())[index + 1];
  }

  return currentYearDays;
}

function getElapsedDaysSinceMonth(month, year) {
  let total = 0;

  for (let index = month; index <= 12; index++) {
    total += getMonthDays(year)[index];
  }
  return total;
}

function isFutureDate(day, month, year) {
  return new Date(year, month - 1, day) > new Date();
}

function getElapsedDaysSinceDate(day, month, year) {
  if (isFutureDate(day, month, year)) return 0;

  let totalDays = 0;

  for (let y = year; y < new Date().getFullYear(); y++) {
    let currentMonth = totalDays === 0 ? month : 1;

    totalDays += getElapsedDaysSinceMonth(currentMonth, y);
  }

  return totalDays + getElapsedDaysOfTheCurrentYear() - day;
}

function dateToYears(day, month, year) {
  return Number((getElapsedDaysSinceDate(day, month, year) / 365.2).toFixed(3));
}

function yearsToMonths(years) {
  return Number(((years * 12) / 1).toFixed(3));
}

function monthToDays(month) {
  return Number((month * 30).toFixed(3));
}

function getFloatingPoint(num) {
  return num - Math.floor(num);
}

function getAccuratedAge(day, month, year) {
  const years = dateToYears(day, month, year);
  const months = yearsToMonths(getFloatingPoint(years));
  const days = monthToDays(getFloatingPoint(months));

  return {
    years: Math.floor(years),
    months: Math.floor(months),
    days: Math.floor(days),
  };
}

console.log(getAccuratedAge(9, 10, 1998));

export {
  isValidDay,
  isValidMonth,
  isValidYear,
  getYearDaysCount,
  isValidDate,
  isCurrentMonth,
  isCurrentYear,
  getElapsedDaysSinceDate,
};
