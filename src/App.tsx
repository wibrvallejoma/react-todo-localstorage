import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { TodoList } from './components/todoList';
import { AddTodo } from './components/addTodo';

function App() {
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean}[]>([]);


  return (
    <>
      <Header title="To-do App" />
      <AddTodo />
      <TodoList todos={todos} />
    </>
  )
}

export default App
