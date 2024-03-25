import { Todo } from 'types/todo.model'

export interface GetTodoList {
  limit?: number
  skip?: number
}

export interface GetTodoListResponse {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}

export interface UpdateTodo {
  updatedTodo: Partial<Omit<Todo, 'id'>>
  todoId: number
}
