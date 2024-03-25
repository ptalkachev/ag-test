import Checkmark from 'assets/icons/checkmark.svg'
import CheckmarkRound from 'assets/icons/checkmark_round.svg'
import Delete from 'assets/icons/delete.svg'
import Edit from 'assets/icons/edit.svg'
import { memo, useState } from 'react'
import { EditFormViewModel, TodoViewModel } from './todo.model'
import { classNames } from 'utils/classNames'
import { useDeleteTodoMutation, useUpdateTodoMutation } from 'store/api/todos'
import { Input } from 'components/input'
import cls from './todo.module.scss'

const EditForm = memo(({ id, todo, updateTodoText }: EditFormViewModel) => {
  const [editValue, setEditValue] = useState(todo)

  return (
    <>
      <Input
        value={editValue}
        onChange={setEditValue}
        classname={cls.editInput}
      />
      <Checkmark onClick={() => updateTodoText(editValue)} />
    </>
  )
})

export const Todo = memo(({ id, completed, todo }: TodoViewModel) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [updateTodo, { isLoading: isUpdateLoading }] = useUpdateTodoMutation()
  const [deleteTodo, { isLoading: isDeleteLoading }] = useDeleteTodoMutation()

  const toggleCheckedStatus = () => {
    updateTodo({ todoId: id, updatedTodo: { completed: !completed, todo } })
  }

  const updateTodoText = (text: string) => {
    updateTodo({ todoId: id, updatedTodo: { todo: text, completed } }).then(() => setIsEditMode(false))
  }

  const deleteTodoHandler = () => {
    deleteTodo(id)
  }

  return (
    <div className={classNames(cls.container, { [cls.loading]: isUpdateLoading || isDeleteLoading })}>
      <CheckmarkRound
        className={classNames(cls.status, { [cls.completed]: completed })}
        onClick={toggleCheckedStatus}
        fill="var(--green-700)"
      />
      {isEditMode ? (
        <EditForm
          id={id}
          todo={todo}
          updateTodoText={updateTodoText}
        />
      ) : (
        <>
          <span className={classNames(cls.task, { [cls.completed]: completed })}>{todo}</span>
          <Edit
            className={cls.edit}
            onClick={() => setIsEditMode(true)}
          />
        </>
      )}
      <Delete
        className={cls.edit}
        onClick={deleteTodoHandler}
        fill="var(--grey-700)"
      />
    </div>
  )
})
