import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Props {
  onAdd: (text: string) => void
}

export function AddTodo({ onAdd }: Props) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputText.trim() === "") return

    onAdd(inputText);  // Send the inputText to the parent component
    setInputText("")
  }

  return (
    <div className="flex flex-row gap-2">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add new todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  )
}
