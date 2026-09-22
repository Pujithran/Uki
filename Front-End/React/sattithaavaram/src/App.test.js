import { render, screen } from '@testing-library/react';
import App from './App';

test('renders click button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /click/i });
  expect(buttonElement).toBeInTheDocument();
});
