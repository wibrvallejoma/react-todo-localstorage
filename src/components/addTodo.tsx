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
    <div className="w-96 m-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="Add new todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button type="submit" className="relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] before:duration-1000">Add</Button>
      </form>
    </div>
  )
}
