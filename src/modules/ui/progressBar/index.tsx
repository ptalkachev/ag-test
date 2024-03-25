import { useSelector } from 'react-redux'
import { getTodoListState } from 'store/slices/todoSlice'
import cls from './progressBar.module.scss'

export const ProgressBar = () => {
  const { todos } = useSelector(getTodoListState)

  const total = todos.length || 1
  const completedCount = todos.filter(({ completed }) => completed).length
  const completed = (completedCount / total) * 100

  const r = 35
  const dasharray = 2 * Math.PI * r
  const offset = ((100 - completed) * dasharray) / 100

  return (
    <svg
      className={cls.svg}
      width={100}
      height={100}
    >
      <g transform={`rotate(-90 50 50)`}>
        <circle
          r={r}
          cx={50}
          cy={50}
          className={cls.circle}
        ></circle>
        <circle
          r={r}
          cx={50}
          cy={50}
          className={cls.progress}
          strokeDasharray={dasharray}
          strokeDashoffset={offset}
        ></circle>
      </g>
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        className={cls.text}
      >
        {completed.toFixed(0)}%
      </text>
    </svg>
  )
}
