// Controller for todo methods

import db from '../database'
import { ITodo } from '../types'
import { Request, Response, NextFunction, RequestHandler } from 'express'
import { body, validationResult } from 'express-validator'

// Return list of todos on GET
// TODO: Once users are implemented, have this only return the active user's todos
export const todo_list: RequestHandler = async (req, res, next) => {
  db
    .any('SELECT * FROM todo;')
    .then((data: ITodo[]) => {
      res.status(200).json(data)
    })
    .catch((err: Error) => {
      res.status(500).json(err)
    })
}

// Add a new todo on POST
// TODO: Once users are implemented, make this request a user ID (will need to rework the table in DB -- look up how to use relational keys in Postgres?)
// TODO: Allow to account for dates
export const new_todo = [
  // Validate and sanitize fields (title, importance, description)
  body('title')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Todo title must be between 1 and 255 characters'),
  body('importance')
    .isInt({ min: 1, max: 10 })
    .withMessage('Importance must be an integer of value ranging from 1 to 10'),
  body('description')
    .trim()
    .isLength({ max: 1000 })
    .optional({ nullable: true }),
  async (req: Request, res: Response, next: NextFunction) =>  {
    const errors = validationResult(req)
    db
      .any(`
        INSERT INTO todo (title, importance, description)
        VALUES ('${req.body.title}', ${req.body.importance}, '${req.body.description ? req.body.description : null}');
      `)
      .then((data: ITodo[]) => {
        // TODO: Return the todo created? Might not be necessary.
        res.status(200).json('Task successfully created')
      })
      .catch(() => {
        res.status(400).json({ errors: errors.array() })
      })
  }
]

// Deletes a todo of the specified ID on DELETE
export const delete_todo: RequestHandler = async (req, res, next) => {
  db
    .any(`DELETE FROM todo WHERE id = ${req.query.id};`)
    .then((data: ITodo[]) => {
      res.status(200).json(data)
    })
    .catch((err: Error) => {
      res.status(500).json(err)
    })
}
