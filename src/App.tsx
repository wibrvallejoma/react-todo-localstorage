import './App.css'
import { Header } from './components/header'
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { useLocalStorage } from './hooks/useLocalStorage';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

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
