import { createStore } from 'redux';
import reducer from './reducer';

const initialStore = {
  appointments: {}
};

export const store = createStore(
  reducer,
  initialStore
);