import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

describe('actions', () => {
  it('should create an action to add an appointment', () => {
    const day = '2020_01_01';
    const appointment = { titile: 'Appointment title', description: 'Appointment description', color: 'red' }
    const expectedAction = {
      type: types.ADD_APPOINTMENT,
      payload: { day, appointment }
    }
    expect(actions.addAppointment(day, appointment)).toEqual(expectedAction);
  });
});