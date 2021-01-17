import {
  SET_GLOBAL_CITY,
  OPEN_DAY,
  CLOSE_DAY,
  ADD_APPOINTMENT,
  OPEN_LIST,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
} from './actionTypes';

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
    case ADD_APPOINTMENT:{
      const { appointments } = state;
      const { day, appointment } = action.payload;
      appointments[day] = [
        ...(appointments[day] || []),
        appointment
      ];
      localStorage.setItem('appointments', JSON.stringify(appointments));
      return {
        ...state,
        appointments: {
          ...appointments
        },
      }
    }
    case DELETE_APPOINTMENT: {
      const { day, index } = action.payload;
      const { appointments } = state;
      
      appointments[day] = appointments[day].filter((appointment, i) => i !== index );
      localStorage.setItem('appointments', JSON.stringify(appointments));
      return {
        ...state,
        appointments: {
          ...appointments
        },
      };
    }
    case EDIT_APPOINTMENT: {
      const { day, index, key, value } = action.payload;
      const { appointments } = state;
      
      appointments[day] = appointments[day].map((appointment, i) => {
        if (i === index) {
          appointment[key] = value;
        }
        return appointment;
      });
      localStorage.setItem('appointments', JSON.stringify(appointments));
      return {
        ...state,
        appointments: {
          ...appointments
        },
      };
    }
    default:
      return state;
  }
}