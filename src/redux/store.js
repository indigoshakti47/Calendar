import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
  appointments: {},
  globalCity: {}
};

export const store = createStore(
  reducer,
  initialStore
);