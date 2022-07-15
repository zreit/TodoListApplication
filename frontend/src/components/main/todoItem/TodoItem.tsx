import React, { useState } from 'react'


const TodoItem = ({ todo }:{_id:string;todo:string;priority: number}) => {
  return (
    <div className='todo-item'>
        <h2>{ }</h2>
        <h3>Priority { }</h3>
    </div>
  )
}

export default TodoItem