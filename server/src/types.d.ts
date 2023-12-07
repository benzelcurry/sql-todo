import { RowDataPacket } from "mysql2";

export interface ITodo extends RowDataPacket {
  id: number
  title: string
  importance: number
  created: Date
  due_date: Date
  description: string
}