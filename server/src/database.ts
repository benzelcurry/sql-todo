import mysql from 'mysql2'
require('dotenv').config()

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: 'kanban_app'
}).promise()

const result = pool.query('SELECT * FROM todo;')
result.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
