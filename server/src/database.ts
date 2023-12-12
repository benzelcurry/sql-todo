const pgp = require('pg-promise')()
require('dotenv').config()

import { ITodo } from './types'

const db = pgp({ connectionString: `postgres://${process.env.PG_USN}:${process.env.PG_PW}@${process.env.PG_PORT}/${process.env.PG_NAME}`})

db.any('SELECT * FROM todo;')
  .then((data: ITodo[]) => {
    console.log(data)
  })
  .catch((error: Error) => {
    console.log(error)
  })

export default db

// db
//   .any(`
//     INSERT INTO todo (title, importance, description)
//     VALUES ('Test', 10, 'This is my first write to my Postgres DB from Node');
//   `)
//   .then((data: ITodo[]) => {
//     console.log(data)
//   })
//   .catch((err: Error) => {
//     console.log(err)
//   })
