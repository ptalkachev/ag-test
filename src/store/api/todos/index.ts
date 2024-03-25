import { DeletedTodo, Todo } from 'types/todo.model'
import { appApi } from '..'
import { GetTodoList, GetTodoListResponse, UpdateTodo } from './todosApi.model'
import { API_TODOS, API_TODOS_ADD, API_TODOS_RANDOM, API_TODOS_USER } from 'constants/api'
import { addUrlParam } from 'utils/addUrlParam'

export const todosApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getTodoList: build.query<GetTodoListResponse, GetTodoList>({
      query: ({ limit, skip }) => ({
        url: API_TODOS,
        params: {
          limit,
          skip
        }
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      }
    }),
    createTodo: build.mutation<Todo, Omit<Todo, 'id'>>({
      query: (body) => ({
        url: API_TODOS_ADD,
        method: 'POST',
        body
      })
    }),
    updateTodo: build.mutation<Todo, UpdateTodo>({
      query: ({ todoId, updatedTodo }) => ({
        url: addUrlParam(API_TODOS, [todoId]),
        method: 'PUT',
        body: updatedTodo
      })
    }),
    deleteTodo: build.mutation<DeletedTodo, number>({
      query: (todoId) => ({
        url: addUrlParam(API_TODOS, [todoId]),
        method: 'DELETE'
      })
    })
  }),
  overrideExisting: false
})

export const { useGetTodoListQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todosApi
