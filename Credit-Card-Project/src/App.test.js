import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('accepts a single-digit month and normalizes it to two digits', async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.type(screen.getByPlaceholderText('e.g. Jane Appleseed'), 'Jane Appleseed');
  await user.type(screen.getByPlaceholderText('e.g. 1234 5678 9123 0000'), '1234567890123456');
  await user.type(screen.getByPlaceholderText('MM'), '1');
  await user.type(screen.getByPlaceholderText('YY'), '25');
  await user.type(screen.getByPlaceholderText('e.g. 123'), '123');
  await user.click(screen.getByRole('button', { name: /confirm/i }));

  expect(screen.getByText(/Card details confirmed successfully!/i)).toBeInTheDocument();
  expect(screen.getByText('01/25')).toBeInTheDocument();
});
