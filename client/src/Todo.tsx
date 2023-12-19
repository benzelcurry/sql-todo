// Creates Todo cards to be displayed in App

import axios from 'axios' 

import './Todo.css'

import { ITodo } from './types'

function Todo(props: ITodo) {
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
      <h3>{props.title}</h3>
      <p>Created: {props.created.toString()}</p>
      <p>Importance: {props.importance}</p>
      <p>{props.description}</p>
      <p>Due: {props.due_date.toString()}</p>
      <button onClick={() => handleDelete(props.id!)}>Delete Todo</button>
      <button onClick={() => handleUpdate(props.id!)}>Update Todo</button>
    </div>
  )
}

export default Todo
