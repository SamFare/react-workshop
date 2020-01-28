import React from 'react';
import { render, getNodeText, fireEvent } from '@testing-library/react';
import App from './App'

test('renders a + button', () => {
  const { getByText } = render(<App />);
  const plusButton = getByText(/\+/i);
  expect(plusButton).toBeInTheDocument();
})

test('renders a - button', () => {
  const { getByText } = render(<App />);
  const minusButton = getByText(/-/i);
  expect(minusButton).toBeInTheDocument();
})

  
test('counter is incremented by 1 when + is pressed', () => {
    const { getByTestId, getByText } = render(<App />); 
    const element = getByTestId('counter')
    

    fireEvent.click(getByText(/\+/i))

    expect(getNodeText(element)).toContain("1")
})

test('counter is decremented by 1 when - is pressed', () => {
  const { getByTestId, getByText } = render(<App />); 
  const element = getByTestId('counter')
  

  fireEvent.click(getByText(/\-/i))

  expect(getNodeText(element)).toContain("-1")
})