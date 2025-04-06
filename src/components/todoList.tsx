import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { useTransition, animated } from '@react-spring/web';

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
  const transitions = useTransition(todos, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
    keys: (item) => item.id,
  });

  return (
    <div className="m-4 w-full" style={{maxWidth: '1280px'}}>
      {todos.length === 0 && <p className="text-3xl font-bold text-center">No todos</p>}
      <ul className="flex flex-col-reverse justify-between">
        {transitions((style, item) => (
          <animated.div style={style}>
            <Card className="m-4 hover:shadow-black/20 hover:shadow-xl hover:scale-105 transition-all duration-300" key={item.id}>
              <CardContent>
                <CardTitle className="flex gap-4 justify-between items-center">
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => onToggle(item.id)}
                    />
                    <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                      {item.text}
                    </span>
                  </div>
                  <Button onClick={() => onDelete(item.id)}>Delete</Button>
                </CardTitle>
              </CardContent>
            </Card>
          </animated.div>
        ))}
      </ul>
    </div>
  )
}