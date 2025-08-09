import React, { useState } from 'react'
import './todo.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setTasks(prev => [...prev, { id: Math.floor(Math.random()*100), text: input, completed: false }])
      setInput("")
    }
  }

  const handleDone = (id) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task))}

  return (
    <div className="todo-container">

      <h2 className="title">Todo List</h2>

      <form onSubmit={handleSubmit} className="form">

        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a task' className='input'/>

        <button type='submit' className="add-button">Add</button>

      </form>

      <ul className="task-list">
        {tasks.map((task) => (

          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}> {task.text}

            <button onClick={() => handleDone(task.id)}>
              {task.completed ? "Undo" : "Done"}
            </button>

          </li>

        ))}
      </ul>
    </div>
  )
}

export default TodoApp
