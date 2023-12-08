// import mysql, { ResultSetHeader } from 'mysql2'
const pgp = require('pg-promise')()
require('dotenv').config()

const db = pgp({ connectionString: `postgres://${process.env.PG_USN}:${process.env.PG_PW}@${process.env.PG_PORT}/${process.env.PG_NAME}`})
// import { ITodo } from './types'

db.many('SELECT * FROM weather;')
  .then((data: any) => {
    console.log(data)
  })
  .catch((error: any) => {
    console.log(error)
  })

// const pool = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_NAME
// }).promise()

// async function getTodo(id: number) {
//   const [rows] = await pool.query<ITodo[]>(`
//   SELECT *
//   FROM todo
//   WHERE id = ?
//   `, [id])
//   return rows[0]
// }

// (async () => {
//   const todo = await getTodo(3)
//   console.log(todo)
// })()

// async function createTodo(title: string, importance: number) {
//   const [result] = await pool.query<ResultSetHeader>(`
//   INSERT INTO todo (title, importance)
//   VALUES (?, ?)
//   `, [title, importance])

//   const id = result.insertId
//   return getTodo(id)
// }

// (async () => {
//   const todo = await createTodo('Task 5', 3)
//   console.log(todo)
// })()
