function isValidDay(day = 1, month = 1) {
  if (day === 0 || month > 12 || month < 1) return false;

  const monthDays = {
    1: 31,
    2: 28,
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

  return day >= 1 && day <= monthDays[month];
}

function isValidMonth(month = 1) {
  return month <= 12 && month >= 1;
}

function validateYear(year = new Date().getFullYear()) {
  return year <= new Date().getFullYear() && year >= 0;
}

export { isValidDay, isValidMonth, validateYear };
