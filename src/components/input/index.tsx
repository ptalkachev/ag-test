import { ChangeEvent, memo } from 'react'
import { InputViewModel } from './input.model'
import cls from './input.module.scss'
import { classNames } from 'utils/classNames'

export const Input = memo(({ value = '', onChange, classname }: InputViewModel) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      className={classNames(cls.input, {}, [classname])}
      type="text"
      value={value}
      onChange={onChangeHandler}
    />
  )
})
