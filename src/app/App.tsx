import { paginationItemsRequest } from 'constants/api'
import { Pagination } from 'modules/ui/pagination'
import { TodoList } from 'modules/ui/todoList'
import { useSearchParams } from 'react-router-dom'
import { useGetTodoListQuery } from 'store/api/todos'
import { Header } from 'modules/ui/header'

const App = () => {
  const [searchParams] = useSearchParams()
  const pageParam = searchParams.get('page')
  const page = Number(pageParam ?? 1)
  const { isFetching } = useGetTodoListQuery({
    limit: paginationItemsRequest,
    skip: paginationItemsRequest * (page - 1)
  })

  return (
    <>
      <Header />
      <TodoList isLoading={isFetching} />
      <Pagination />
    </>
  )
}

export default App
