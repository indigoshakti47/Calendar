import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
  appointments: JSON.parse(localStorage.getItem('appointments')) || {},
  globalCity: {},
  openedDay: null,
  openedList: null,
};

export const store = createStore(
  reducer,
  initialStore
);