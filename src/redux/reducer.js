import { SET_APPOINTMENT } from './actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_APPOINTMENT:
      return state
    default:
      return state;
  }
}