import { memo } from 'react'
import { ButtonViewModel } from './button.model'
import { classNames } from 'utils/classNames'
import cls from './button.module.scss'

export const Button = memo(({ classname, children, disabled, ...rest }: ButtonViewModel) => {
  return (
    <button
      className={classNames(cls.button, { [cls.disabled]: disabled }, [classname])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
})
