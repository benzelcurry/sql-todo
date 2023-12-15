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

  return (
    <div>
      <h3>{props.title}</h3>
      <p>Created: {props.created.toString()}</p>
      <p>Importance: {props.importance}</p>
      <p>{props.description}</p>
      <p>Due: {props.due_date.toString()}</p>
      <button onClick={() => handleDelete(props.id!)}>Delete Todo</button>
    </div>
  )
}

export default Todo
