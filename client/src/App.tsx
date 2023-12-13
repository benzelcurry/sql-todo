import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import { ITodo } from './types'

import Nav from './Nav'
import Form from './Form'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/todo')
      .then(res => {
        setTodos(res.data)
      })
  }, [])

  return (
    <>
      <Nav />
      <Form />
    </>
  )
}

export default App
