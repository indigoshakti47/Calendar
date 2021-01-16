export const getDaystoSkip = (currentDate) => {
  const firstMonthDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  
  return new Array(firstMonthDay.getDay() > 0 ? firstMonthDay.getDay() - 1 : 6).fill(
    null
  );
}

export const getDaysInMonthArray = (monthDate) => {
  const numberOfDays = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
  return new Array(numberOfDays).fill(null);
}

export const getNextMonth = (date) =>  new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  1
);

export const getLastMonth = (date) => {
  if (date.getMonth() === 0)
    return new Date(date.getFullYear() - 1, date.getMonth() + 11, 1);

  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}
