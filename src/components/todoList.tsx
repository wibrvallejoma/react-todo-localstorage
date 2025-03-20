import { Button } from "@/components/ui/button";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onDelete, onToggle }: Props) {
  return (
    <>
      {todos.length === 0 && <p>No todos</p>}
      <ul>
        {todos.map((item: Todo) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
            />
            <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <Button onClick={() => onDelete(item.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </>
  )
}