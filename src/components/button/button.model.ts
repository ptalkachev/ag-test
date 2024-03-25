import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonViewModel extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string
  children?: ReactNode
}
