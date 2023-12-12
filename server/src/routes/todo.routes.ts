import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()

import {
  todo_list
} from '../controllers/todo.controller'

// Returns list of todos
router.get('/', todo_list)

export default router
