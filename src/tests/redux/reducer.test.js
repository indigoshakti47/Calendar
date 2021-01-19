import initialState from '../fixtures/initialState';

import reducer from '../../redux/reducer';
import * as types from '../../redux/actionTypes';
import { addAppointment } from '../../redux/actions';

const day = '2021_1_10';
const appointment = { title: 'This is the title', description: 'This is the description' };

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  it('should handle ADD_APPOINTMENT', () => {
    const expectedResult = {
      ...initialState,
      appointments: {
        ...initialState.appointments,
        [day]: [
          ...(initialState.appointments[day] || []),
          appointment
        ]
      }
    }
    
    expect(
      reducer(initialState, addAppointment(day, appointment))
    ).toEqual(expectedResult);
  })
})