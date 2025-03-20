interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  todos: Todo[];
}

export function TodoList({ todos }: Props) {
  return (
    <>
      {todos.length === 0 && <p>No todos</p>}
      <ul>
        {todos.map((item: Todo) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}