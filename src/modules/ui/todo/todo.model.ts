import { Todo } from 'types/todo.model'

export interface TodoViewModel extends Todo {}

export interface EditFormViewModel extends Pick<TodoViewModel, 'todo' | 'id'> {
  updateTodoText: (text: string) => void
}
