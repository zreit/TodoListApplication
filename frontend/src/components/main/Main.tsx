import { resolveSoa } from 'dns';
import React, { useEffect, useState } from 'react'
import AddTodoForm from './form/AddTodoForm'
import './Main.css'
import TodoItem from './todoItem/TodoItem';

const Main = () => {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(todos => setTodo(todos));
  }, []);

  const fetchedTodos = todo && todo?.map((todo: {_id: string; todo: string; priority: number;}) => 
    <TodoItem {...todo}></TodoItem>
  );


  return (
    <main>
      <AddTodoForm></AddTodoForm>
      <div className='created-todos'>
        
      </div>
    </main>
  )
}

export default Main