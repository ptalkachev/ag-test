import { ReactNode } from 'react'
import cls from './appLayout.module.scss'

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cls.container}>
      <div className={cls.content}>{children}</div>
    </div>
  )
}
