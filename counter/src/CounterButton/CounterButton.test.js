import React from 'react';
import { render } from '@testing-library/react';
import CounterButton from './CounterButton';

test('renders a + button', () => {
  const { getByText } = render(<CounterButton text="+"/>);
  const plusButton = getByText(/\+/i);
  expect(plusButton).toBeInTheDocument();
})

test('renders a - button', () => {
  const { getByText } = render(<CounterButton text="-"/>);
  const minusButton = getByText(/-/i);
  expect(minusButton).toBeInTheDocument();
});