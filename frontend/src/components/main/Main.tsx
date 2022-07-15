import { resolveSoa } from 'dns';
import React, { useEffect, useState } from 'react'
import AddTodoForm from './form/AddTodoForm'
import './main.css'
import TodoItem from './todoItem/TodoItem';

const Main = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(todos => setTodos(todos));
  }, []);

  const fetchedTodos = todos && todos?.map((todo: {_id: string; todo: string; priority: number;}) =>
    <TodoItem key={todo._id} todos={todos} todoName={todo.todo} setTodos={setTodos}></TodoItem>
  );

  return (
    <main>
      <AddTodoForm setTodos={setTodos}></AddTodoForm>
      <div className='created-todos'>
        {fetchedTodos}
      </div>
    </main>
  )
}

export default Main