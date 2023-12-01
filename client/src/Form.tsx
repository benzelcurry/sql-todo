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
    <div>
      <form>
        <h3>Create a new todo</h3>
        <label htmlFor="task">Task</label>
        <input type="text" name="task" id="task" required />
        <label htmlFor="importance">Importance</label>
        <input type="number" name="importance" id="importance" required />
        <label htmlFor="due-date">Due Date</label>
        <input type="date" name="due-date" id="due-date" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
      </form>
    </div>
  )
}

export default Form
