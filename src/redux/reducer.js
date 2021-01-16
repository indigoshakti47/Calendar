import { SET_GLOBAL_CITY } from './actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_GLOBAL_CITY:
      return {
        ...state,
        globalCity: action.payload
      }
    default:
      return state;
  }
}