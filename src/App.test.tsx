import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome To The Every.io Code Challenge./i);
  expect(linkElement).toBeInTheDocument();
});
