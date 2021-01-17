 import {
  SET_GLOBAL_CITY,
  OPEN_DAY,
  CLOSE_DAY,
  OPEN_LIST,
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
} from './actionTypes';

export const setGlobalCity = (city) => ({
  type: SET_GLOBAL_CITY,
  payload: city,
});

export const openDay = (day) => ({
  type: OPEN_DAY,
  payload: day,
})

export const closeDay = () => ({
  type: CLOSE_DAY,
})

export const addAppointment = (day, appointment) => ({
  type: ADD_APPOINTMENT,
  payload: { day, appointment },
});

export const openList = (day) => ({
  type: OPEN_LIST,
  payload: day,
})

export const deleteAppointment = (day, index) => ({
  type: DELETE_APPOINTMENT,
  payload: { day, index }
})

export const editAppointment = (day, index, key, value) => ({
  type: EDIT_APPOINTMENT,
  payload: { day, index, key, value }
});
