import React, { useState } from 'react'
import './TodoItem.css'



const TodoItem = ( {todos, todoName, setTodos} :any) => {
  const [updateTodoToggle, setUpdateTodoToggle] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState("");
  const [priorityUpdate, setPriorityUpdate] = useState(0);

  const todoIndex = todos.findIndex((todoItem: {todo: string}) => todoItem.todo === todoName);

  const deleteItem = async () => {
    await fetch(`http://localhost:3001/todos/${todos && todos[todoIndex]?.todo}`, {method: 'DELETE'});

    await fetch(`http://localhost:3001/todos`)
    .then(res => res.json())
    .then(todos => setTodos(todos));

  }

  const updateItem = async () => {
    setUpdateTodoToggle(!updateTodoToggle);
  }

  const submitPutItem = async () => {
    const updatedTodo = {
      todo: todoUpdate,
      priority: priorityUpdate
    }

    if(updatedTodo.todo !== "" && updatedTodo.priority > 0) {
      await fetch(`http://localhost:3001/todos/${todos && todos[todoIndex]?.todo}`, { 
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo)
    });

    setUpdateTodoToggle(!updateTodoToggle);

    await fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(todos => setTodos(todos));
    }
    setUpdateTodoToggle(!updateTodoToggle);
  }


  return (
    <div className='todo-item'>
        <h2>{ todos && todos[todoIndex]?.todo }</h2>
        {updateTodoToggle?<input type="text" name='todo' placeholder='ToDo' required onChange={ (e:any) => setTodoUpdate(e.target.value) }></input>:""}
        <h3>Priority { todos && todos[todoIndex]?.priority }</h3>
        {updateTodoToggle?<input type="number" name='priority' placeholder='Priority' min='1' required onChange={ (e:any) => setPriorityUpdate(e.target.value) }></input>:""}
        <button className='btnDeleteItem' onClick={deleteItem}>Delete</button>
        {updateTodoToggle?<button className='btnUpdateItem' onClick={submitPutItem}>Update</button>:<button className='btnEditItem' onClick={updateItem}>Edit</button>}
    </div>
  )
}

export default TodoItem