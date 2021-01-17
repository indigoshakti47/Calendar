import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
  appointments: {},
  globalCity: {},
  openedDay: null
};

export const store = createStore(
  reducer,
  initialStore
);