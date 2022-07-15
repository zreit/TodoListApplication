import React, { useState } from 'react'
import './AddTodoForm.css'

const AddTodoForm = (setTodos: any) => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState(0);

  const submitTodo = async () => {
    const todoPost = {
      todo: todo,
      priority: priority
    }

    await fetch('http://localhost:3001/todos', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoPost)
    });

    await fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(todos => setTodos(todos));

    setTodo("");
    setPriority(0);
  }

  return (
    <form onSubmit={submitTodo}>
        <input type="text" name='todo' placeholder='ToDo' required onChange={ (e:any) => setTodo(e.target.value) }/>
        <input type="number" name='priority' placeholder='Priority' required min='0' onChange={ (e:any) => setPriority(e.target.value) } />
        <button type="submit">Create</button>
    </form>
  )
}

export default AddTodoForm