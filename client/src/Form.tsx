import { useState } from 'react'

import './Form.css'

import { Todo } from './types'

function Form() {
  const [todo, setTodo] = useState<Todo>({
    task: '',
    importance: 1,
    dueDate: new Date(),
    description: ''
  })

  return (
    <form className='todo-form'>
      <h3 className='form-heading'>Create a new todo</h3>
      <label htmlFor="task">Task</label>
      <input type="text" name="task" id="task" required />
      <label htmlFor="importance">Importance</label>
      <input type="number" name="importance" id="importance" required />
      <label htmlFor="due-date">Due Date</label>
      <input type="date" name="due-date" id="due-date" />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" />
    </form>
  )
}

export default Form
