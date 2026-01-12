import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

describe('Todo Component', () => {
  const mockTodo = {
    text: 'Test todo item',
    done: false,
  };

  const mockOnClickDelete = jest.fn(() => jest.fn());
  const mockOnClickComplete = jest.fn(() => jest.fn());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders todo text correctly', () => {
    render(
      <Todo
        todo={mockTodo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    expect(screen.getByText('Test todo item')).toBeInTheDocument();
  });

  test('shows "not done" info when todo is not completed', () => {
    render(
      <Todo
        todo={mockTodo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    expect(screen.getByText('This todo is not done')).toBeInTheDocument();
    expect(screen.getByText('Set as done')).toBeInTheDocument();
  });

  test('shows "done" info when todo is completed', () => {
    const completedTodo = { ...mockTodo, done: true };

    render(
      <Todo
        todo={completedTodo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    expect(screen.getByText('This todo is done')).toBeInTheDocument();
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument();
  });

  test('calls onClickDelete when Delete button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Todo
        todo={mockTodo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    const deleteButton = screen.getByText('Delete');
    await user.click(deleteButton);

    expect(mockOnClickDelete).toHaveBeenCalledWith(mockTodo);
  });

  test('calls onClickComplete when Set as done button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Todo
        todo={mockTodo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    const completeButton = screen.getByText('Set as done');
    await user.click(completeButton);

    expect(mockOnClickComplete).toHaveBeenCalledWith(mockTodo);
  });

  test('does not show Set as done button when todo is completed', () => {
    const completedTodo = { ...mockTodo, done: true };

    render(
      <Todo
        todo={completedTodo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    expect(screen.queryByText('Set as done')).not.toBeInTheDocument();
  });
});
