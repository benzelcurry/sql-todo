import './Todo.css'

import { ITodo } from './types'

function Todo(props: ITodo) {
  return (
    <div>
      <h3>{props.task}</h3>
      <p>Created: {props.created.toString()}</p>
      <p>Importance: {props.importance}</p>
      <p>{props.description}</p>
      <p>Due: {props.dueDate.toString()}</p>
    </div>
  )
}

export default Todo
