import React, { useState } from 'react'
import './TodoItem.css'



const TodoItem = ( {todos, todoName, setTodos} :any) => {

  const todoIndex = todos.findIndex((todoItem: {todo: string}) => todoItem.todo === todoName);

  const deleteItem = async () => {
    await fetch(`http://localhost:3001/todos/${todos && todos[todoIndex]?.todo}`, {method: 'DELETE'});

    await fetch(`http://localhost:3001/todos`)
    .then(res => res.json())
    .then(todos => setTodos(todos));

  }

  return (
    <div className='todo-item'>
        <h2>{ todos && todos[todoIndex]?.todo }</h2>
        <h3>Priority { todos && todos[todoIndex]?.priority }</h3>
        <button className='btnDeleteItem' onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default TodoItem