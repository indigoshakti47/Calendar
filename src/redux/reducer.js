import { SET_GLOBAL_CITY, OPEN_DAY, CLOSE_DAY, ADD_APPOINTMENT, OPEN_LIST } from './actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_GLOBAL_CITY:
      return {
        ...state,
        globalCity: action.payload
      }
    case OPEN_DAY:
      return {
        ...state,
        openedDay: action.payload
      }
    case OPEN_LIST:
      return {
        ...state,
        openedList: action.payload
      }
    case CLOSE_DAY:
      return {
        ...state,
        openedDay: null
      }
    case ADD_APPOINTMENT:
      const { appointments } = state;
      const { day, appointment } = action.payload;
      appointments[day] = [
        ...(appointments[day] || []),
        appointment
      ];
      localStorage.setItem('appointments', JSON.stringify(appointments));
      return {
        ...state,
        appointments,
      }
    default:
      return state;
  }
}