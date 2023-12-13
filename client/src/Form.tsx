import { useState, useEffect } from 'react'

import './Form.css'

import { ITodo } from './types'

function Form() {
  const [todo, setTodo] = useState<ITodo>({
    title: '',
    importance: 1,
    due_date: new Date(),
    created: new Date(),
    description: ''
  })

  useEffect(() => {
    console.log(todo)
  }, [todo])

  return (
    <form className='todo-form'>
      <h3 className='form-heading'>Create a new todo</h3>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" required
        onChange={(e) => setTodo({ ...todo, title: e.target.value})}  
      />
      <label htmlFor="importance">Importance</label>
      <input type="number" name="importance" id="importance" required 
        onChange={(e) => setTodo({ ...todo, importance: parseInt(e.target.value) })} 
      />
      <label htmlFor="due_date">Due Date</label>
      <input type="date" name="due_date" id="due_date" 
        onChange={(e) => setTodo({ ...todo, due_date: new Date(e.target.value)})} 
      />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" 
        onChange={(e) => setTodo({ ...todo, description: e.target.value})} 
      />
      <button>Submit</button>
    </form>
  )
}

export default Form
