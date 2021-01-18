import { months } from '../constants/Dates'

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

export const formatToday = (today) => {
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

export const getDayColor = (today, dateSelected, calendarDay) => {
  const dateToCompareToToday = new Date(dateSelected.getFullYear(), dateSelected.getMonth(), calendarDay);
  const todayFormated = formatToday(today);

  if(todayFormated > dateToCompareToToday) return "#ffe6f2"
  else if(todayFormated < dateToCompareToToday) return "#ccffe6"
  
  return "#cce6ff" 
}

export const slugTimeToHuman = (slugTime) => {
  if (typeof slugTime !== 'string') return '';
  const slugTimeSplit = slugTime.split('_');
  const month = slugTimeSplit[1];
  const day = slugTimeSplit[2]
  return `${months[month]} ${day}`;
}

export const getDate = (year, month, day) => {
  return new Date(year, month, day);
}