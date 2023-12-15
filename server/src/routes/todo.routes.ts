import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()

import {
  todo_list,
  new_todo,
  delete_todo
} from '../controllers/todo.controller'

// Returns list of todos
router.get('/', todo_list)

// Inserts a new todo into table
router.post('/', new_todo)

// Deletes a todo of specified ID from table
router.post('/', delete_todo)

export default router
