const getCurrentYear = () => new Date().getFullYear();
const getCurrentMonth = () => new Date().getMonth();

function isCurrentYear(year) {
  return year === getCurrentYear();
}

function isCurrentMonth(month) {
  return month === getCurrentMonth();
}

function getYearTotalDays(year) {
  return isLeapYear(year) ? 364 : 365;
}

function isValidDate(day, month, year) {
  return isValidYear(year) && isValidMonth(month) && isValidDay(day);
}

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

function isValidDay(day, month, year) {
  const daysCount = getMonthDays(year);

  return (
    isValidYear(year) &&
    isValidMonth(month) &&
    day >= 1 &&
    day <= daysCount[month]
  );
}

function isValidMonth(month) {
  return month >= 1 && month <= 12;
}

function isValidYear(year) {
  return year >= 0 && year <= getCurrentYear();
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getCurrentYearElapsedDays() {
  let count = 0;

  for (let index = 0; index <= getCurrentMonth(); index++) {
    count +=
      index === getCurrentMonth()
        ? new Date().getDate()
        : getMonthDays(getCurrentYear())[index + 1];
  }

  return count;
}

function getElapsedDaysSinceMonth(month, year) {
  let count = 0;

  for (let index = month; index <= 12; index++) {
    count += getMonthDays(year)[index];
  }

  return count;
}

function isFutureDate(day, month, year) {
  return new Date(year, month - 1, day) > new Date();
}

function getElapsedDaysSinceDate(day, month, year) {
  if (isFutureDate(day, month, year)) return 0;

  let count = 0;

  for (let y = year; y < getCurrentYear(); y++) {
    count += getElapsedDaysSinceMonth(count === 0 ? month : 1, y);
  }

  return count + getCurrentYearElapsedDays() - day;
}

function dateToYears(day, month, year) {
  return toFractionDigits(getElapsedDaysSinceDate(day, month, year) / 365.25);
}

function monthsToDays(month) {
  return toFractionDigits(month * 30.44);
}

function yearsToMonths(years) {
  return toFractionDigits(years * 12);
}

function getFloatingPoint(num) {
  return num - Math.floor(num);
}

function toFractionDigits(num) {
  return Number(num.toFixed(4));
}

export {
  isValidDay,
  isValidMonth,
  isValidYear,
  dateToYears,
  monthsToDays,
  getFloatingPoint,
  yearsToMonths,
  isCurrentMonth,
  isCurrentYear,
  isValidDate,
  getYearTotalDays,
  isFutureDate,
};
