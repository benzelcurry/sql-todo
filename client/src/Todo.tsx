// Creates Todo cards to be displayed in App

import { useState } from 'react'
import axios from 'axios' 

import './Todo.css'

import { ITodo } from './types'

// TODO: Write logic to handle updates, style components, then separate into rows + add auth
function Todo(props: ITodo) {
  const [activeUpdate, setActiveUpdate] = useState(false)

  const handleDelete = (id: number) => {
    axios.delete('http://localhost:3000/todo', { params: { id: id } })
    .then(() => {
      location.reload()
    })
    // Refactor to provide a more meaningful error output
    .catch(err => {
      console.log(err)
    })
  }

  const handleUpdate = (id: number) => {
    // Update logic will go here once a corresponding method is built on the server
    // Will need to add a state variable and update text lines to be fields that then submit to the server
  }

  return (
    <div>
      {
        activeUpdate === false
        ?
        <>
          <h3>{props.title}</h3>
          <p>Created: {props.created.toString()}</p>
          <p>Importance: {props.importance}</p>
          <p>{props.description}</p>
          <p>Due: {props.due_date.toString()}</p>
          <button onClick={() => handleDelete(props.id!)}>Delete Todo</button>
          <button onClick={() => setActiveUpdate(!activeUpdate)}>Update Todo</button>
        </>
        :
        <>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Submit Changes</button>
            <button onClick={() => setActiveUpdate(!activeUpdate)}>Cancel Changes</button>
          </form>
        </>
      }
    </div>
  )
}

export default Todo
