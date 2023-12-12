// Controller for todo methods

import db from '../database'
import { ITodo } from '../types'
import { Request, Response, NextFunction, RequestHandler } from 'express'

// Return list of todos on GET
// TODO: Once users are implemented, have this only return the active user's todos
export const todo_list: RequestHandler = async (req, res, next) => {
  db.any('SELECT * FROM todo;')
  .then((data: ITodo[]) => {
    res.status(200).json(data)
  })
  .catch((err: Error) => {
    res.status(500).json(err)
  })
}
