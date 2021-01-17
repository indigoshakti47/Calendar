import { SET_GLOBAL_CITY, OPEN_DAY, CLOSE_DAY } from './actionTypes';

export const setGlobalCity = (city) => ({
  type: SET_GLOBAL_CITY,
  payload: city
});

export const openDay = (dayAppointmens) => ({
  type: OPEN_DAY,
  payload: dayAppointmens
})

export const closeDay = () => ({
  type: CLOSE_DAY,
})

