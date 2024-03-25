import { ProgressBar } from 'modules/ui/progressBar'
import { TodoForm } from 'modules/ui/todoForm'
import cls from './header.module.scss'

export const Header = () => {
  return (
    <div className={cls.container}>
      <ProgressBar />
      <TodoForm />
    </div>
  )
}
