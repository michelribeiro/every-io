import { fireEvent, render, screen } from '@testing-library/react';
import FormEnterNameTask from '.';

describe('FormEnterNameTask Component', () => {
  it('Add new Todo', () => {
    render(<FormEnterNameTask />);
    const formElement = screen.getByPlaceholderText(/Add Task/i);
    fireEvent.change(formElement, "New task todio");

    const submitBtn = screen.getByTestId(/addTask/i);
    fireEvent.click(submitBtn)
  });

});
