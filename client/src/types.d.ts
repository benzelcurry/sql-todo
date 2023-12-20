export type ITodo = {
  id?: number;
  title: string;
  importance: number;
  due_date: Date | string;
  created: Date;
  description: string;
}
