import React, { useState } from 'react'


const TodoItem = () => {
    const [todo, setTodo] = useState([{
        todo: 'hallo',
        priority: 1
    }]);
    
  return (
    <div className='todo-item'>
        <h2>{ }</h2>
    </div>
  )
}

export default TodoItem