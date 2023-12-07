import mysql from 'mysql2'
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
}).promise()

const result = pool.query('SELECT * FROM todo;')
result.then(res => {
  const rows = res[0]
  console.log(rows)
}).catch(err => {
  console.log(err)
})
