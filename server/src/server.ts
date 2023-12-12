import express, { Express, Request, Response } from 'express'
import cors from 'cors'

import todo from './routes/todo.routes'

const app: Express = express()
const port = 3000; // MAKE THIS A .ENV VARIABLE

// Fill this out once allowed origins are known
const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))
app.use(express.json())

app.use('/todo', todo)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is Express + TypeScript')
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`)
})
