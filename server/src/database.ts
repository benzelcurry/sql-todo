const pgp = require('pg-promise')()
require('dotenv').config()

const db = pgp({ connectionString: `postgres://${process.env.PG_USN}:${process.env.PG_PW}@${process.env.PG_PORT}/${process.env.PG_NAME}`})

export default db
