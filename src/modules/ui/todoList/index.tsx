import { Todo } from 'modules/ui/todo'
import { useSelector } from 'react-redux'
import { getTodoListState } from 'store/slices/todoSlice'
import { memo } from 'react'
import { TodoListViewModel } from './todoList.model'
import { classNames } from 'utils/classNames'
import cls from './todoList.module.scss'

export const TodoList = memo(({ isLoading }: TodoListViewModel) => {
  const { todos } = useSelector(getTodoListState)

  return (
    <div className={classNames(cls.container, { [cls.loading]: isLoading })}>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
          />
        )
      })}
    </div>
  )
})
