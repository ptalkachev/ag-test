export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export interface DeletedTodo extends Todo {
  isDeleted: boolean
  deletedOn: string
}
