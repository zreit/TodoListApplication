import React from 'react'
import './AddTodoForm.css'

const AddTodoForm = () => {
  return (
    <form>
        <input type="text" name='todo' placeholder='ToDo'/>
        <input type="number" name='priority' placeholder='Priority' />
        <button type="submit">Create</button>
    </form>
  )
}

export default AddTodoForm