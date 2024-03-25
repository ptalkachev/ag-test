import { Todo } from 'types/todo.model'

export interface TodoSliceState {
  todos: Todo[]
  total: number
}
