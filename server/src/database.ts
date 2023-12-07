import mysql, { ResultSetHeader } from 'mysql2'
require('dotenv').config()

import { ITodo } from './types'

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
}).promise()

async function getTodo(id: number) {
  const [rows] = await pool.query<ITodo[]>(`
  SELECT *
  FROM todo
  WHERE id = ?
  `, [id])
  return rows[0]
}

// (async () => {
//   const todo = await getTodo(3)
//   console.log(todo)
// })()

async function createTodo(title: string, importance: number) {
  const [result] = await pool.query<ResultSetHeader>(`
  INSERT INTO todo (title, importance)
  VALUES (?, ?)
  `, [title, importance])

  const id = result.insertId
  return getTodo(id)
}

// (async () => {
//   const todo = await createTodo('Task 5', 3)
//   console.log(todo)
// })()
