import { paginationItemsRequest } from 'constants/api'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getTodoListState } from 'store/slices/todoSlice'
import { Button } from 'components/button'
import { classNames } from 'utils/classNames'
import cls from './pagination.module.scss'

export const Pagination = memo(() => {
  const { total } = useSelector(getTodoListState)
  const pageCount = Math.ceil(total / paginationItemsRequest)
  const [searchParams, setSearchParams] = useSearchParams()
  const paramsPage = searchParams.get('page') ?? '1'

  return (
    <div className={cls.container}>
      {[...new Array(pageCount)].map((_, i) => {
        const page = String(i + 1)
        return (
          <Button
            key={i}
            onClick={() => setSearchParams({ page })}
            classname={classNames('', { [cls.available]: page !== paramsPage })}
          >
            {i + 1}
          </Button>
        )
      })}
    </div>
  )
})
