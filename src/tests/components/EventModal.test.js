import React from 'react'
import { render, fireEvent, screen } from '../testUtils'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock';

import { addAppointment } from '../../redux/actions';
import initialState from '../fixtures/initialState';
import EventModal, { EventModalUnWrapped } from '../../components/EventModal';

const day = '2020_1_12';
const testAppointment = {
  title: 'Just a title',
  description: 'This is just a description',
  city: '',
  color: '',
  time: '11:47',
}

describe('EventModal', () => {
  test('shouldn\'t be displayed if not passed the openedDay property', () => {
    const { container }  = render(<EventModal />, { initialState });

    expect(container.firstChild.classList.contains('show')).toBe(false);
  });

  test('should be displayed if passed the openedDay property', () => {
    const { container }  = render(<EventModal />, { initialState: { ...initialState, openedDay: day}});

    expect(container.firstChild.classList.contains('show')).toBe(true);
  });

  test('should create an appointment', () => {
    const mockaddAppointment = jest.fn()
    const { getByRole } = render(<EventModalUnWrapped addAppointment={mockaddAppointment} openedDay={day} closeDay={() => {}} />, { initialState })
    const titleInput = getByRole('textbox', { name: 'Title' });
    const descriptionInput = getByRole('textbox', { name: 'Description' });
    const submitButton = getByRole('button', { name: 'Create' });

    fireEvent.change(titleInput, { target: { value: testAppointment.title } });
    fireEvent.change(descriptionInput, { target: { value: testAppointment.description } });

    fireEvent.click(submitButton);

    expect(mockaddAppointment).toHaveBeenCalledWith(day, testAppointment);
  });
});