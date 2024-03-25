import { Input } from 'components/input'
import { Button } from 'components/button'
import { memo, useState } from 'react'
import { useCreateTodoMutation } from 'store/api/todos'
import cls from './todoForm.module.scss'

export const TodoForm = memo(() => {
  const [newTodo, setNewTodo] = useState<string>()
  const [createTodo, { isLoading }] = useCreateTodoMutation()

  const addNewTodo = () => {
    if (newTodo) {
      createTodo({ completed: false, todo: newTodo, userId: 1 })
      setNewTodo('')
    }
  }

  return (
    <form className={cls.container}>
      <Input
        value={newTodo}
        onChange={setNewTodo}
      />
      <Button
        type="submit"
        disabled={!newTodo || isLoading}
        onClick={addNewTodo}
      >
        New Todo
      </Button>
    </form>
  )
})
