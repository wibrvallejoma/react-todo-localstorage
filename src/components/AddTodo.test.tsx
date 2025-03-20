import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from './addTodo';
import { describe, expect, it, vi } from 'vitest';

describe('AddTodo', () => {
  it('sends the text on submit', () => {
    const mockOnAdd = vi.fn();
    render(<AddTodo onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText('Add new todo...');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledWith('Test todo');
  });
})