import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { TodoList } from './components/todoList';
import { AddTodo } from './components/addTodo';

function App() {
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean}[]>([]);

  const handleAdd = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  }

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => {
        if (todo.id === id) todo.done = !todo.done;
        return todo;
      })
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <Header title="To-do App" />
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </>
  )
}

export default App
