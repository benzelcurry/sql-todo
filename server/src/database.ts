import mysql from 'mysql2'

mysql.createPool({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: 'kanban_app'
}).promise()