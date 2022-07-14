import React from 'react'
import AddTodoForm from './form/AddTodoForm'
import './Main.css'

const Main = () => {
  return (
    <main>
      <AddTodoForm></AddTodoForm>
      <div className='created-todos'>
        
      </div>
    </main>
  )
}

export default Main