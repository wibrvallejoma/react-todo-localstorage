import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Hello from ${formData.name}`;
    window.location.href = `mailto:hello@wbvm.com?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="flex-row justify-items-center h-full">
      <h1 id="about" className="text-3xl font-bold mb-6">About This Todo App</h1>

      <p className="mb-6">
        This Todo App is part of my portfolio showcasing my skills in React, TypeScript, and modern web development.<br />
        It demonstrates clean code practices, state management, and responsive design.
      </p>

      <h2 id="contact" className="text-2xl font-bold mb-4">Contact Me</h2>
      
      <form onSubmit={handleSubmit} action="" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <Button type="submit" className="mt-4">Send Message</Button>
      </form>
    </div>
  )
}