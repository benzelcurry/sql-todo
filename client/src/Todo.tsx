import './Todo.css'

import { ITodo } from './types'

function Todo(props: ITodo) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>Created: {props.created.toString()}</p>
      <p>Importance: {props.importance}</p>
      <p>{props.description}</p>
      <p>Due: {props.due_date.toString()}</p>
    </div>
  )
}

export default Todo
