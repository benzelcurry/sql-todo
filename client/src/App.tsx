import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import { ITodo } from './types'

import Nav from './Nav'
import Form from './Form'
import Todo from './Todo'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [displayForm, setDisplayForm] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/todo')
      .then(res => {
        setTodos(res.data)
      })
  }, [])

  return (
    <>
      <Nav displayForm={displayForm} toggleFx={setDisplayForm} />
      { displayForm && <Form /> }
      {
        todos
        ?
        todos.map(todo => 
          <Todo key={todo.id} id={todo.id} title={todo.title} importance={todo.importance}
           created={todo.created} due_date={todo.due_date} description={todo.description} />
        )
        :
        <p>Loading...</p>
      }
    </>
  )
}

export default App
