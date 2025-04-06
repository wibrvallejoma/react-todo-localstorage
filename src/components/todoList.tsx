import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="m-4 w-full" style={{ maxWidth: "1280px" }}>
      {todos.length === 0 && (
        <p className="text-3xl font-bold text-center">No todos</p>
      )}
      <ul className="flex flex-col-reverse justify-between">
        <AnimatePresence>
          {todos.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="m-4 hover:shadow-black/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent>
                  <CardTitle className="flex gap-4 justify-between items-center">
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        checked={item.done}
                        onChange={() => onToggle(item.id)}
                      />
                      <span
                        style={{
                          textDecoration: item.done ? "line-through" : "none",
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                    <Button onClick={() => onDelete(item.id)}>Delete</Button>
                  </CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}