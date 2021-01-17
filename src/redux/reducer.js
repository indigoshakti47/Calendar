import { SET_GLOBAL_CITY, OPEN_DAY, CLOSE_DAY } from './actionTypes';

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
    case CLOSE_DAY:
      return {
        ...state,
        openedDay: null
      }
    default:
      return state;
  }
}