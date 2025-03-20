import { TodoList } from "./todoList";
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

const mockTodos = [
  { id: 1, text: 'Todo 1', done: false },
  { id: 2, text: 'Todo 2', done: true },
];

describe('ListTodo', () => {
  it('shows a list of todos properly', () => {
    render(<TodoList todos={mockTodos} onToggle={vi.fn()} onDelete={vi.fn()} />)
    
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toHaveStyle(
      'text-decoration: line-through'	
    );
  });

  it('calls onToggle when a todo is clicked', () => {
    const onToggleMock = vi.fn();
    render(<TodoList todos={mockTodos} onToggle={onToggleMock} onDelete={vi.fn()} />)
    
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(onToggleMock).toHaveBeenCalledWith(1);
  });
});