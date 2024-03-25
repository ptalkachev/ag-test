import { createSlice } from '@reduxjs/toolkit'
import { todosApi } from 'store/api/todos'
import { TodoSliceState } from './todoSlice.model'

const initialState: TodoSliceState = {
  todos: [],
  total: 0
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (buildier) => {
    buildier
      .addMatcher(todosApi.endpoints.getTodoList.matchFulfilled, (state, { payload }) => {
        state.todos = payload.todos
        state.total = payload.total
      })
      .addMatcher(todosApi.endpoints.updateTodo.matchFulfilled, (state, { payload }) => {
        const index = state.todos.findIndex(({ id }) => payload.id === id)
        const todo = state.todos[index]
        todo.completed = payload.completed
        todo.todo = payload.todo
      })
      .addMatcher(todosApi.endpoints.updateTodo.matchRejected, (state, { meta }) => {
        const { todoId, updatedTodo } = meta.arg.originalArgs
        const index = state.todos.findIndex(({ id }) => id === todoId)
        const todo = state.todos[index]
        todo.completed = updatedTodo.completed ?? todo.completed
        todo.todo = updatedTodo.todo ?? todo.todo
      })
      .addMatcher(todosApi.endpoints.createTodo.matchFulfilled, (state, { payload }) => {
        state.todos = [payload, ...state.todos]
      })
      .addMatcher(todosApi.endpoints.deleteTodo.matchFulfilled, (state, { payload }) => {
        const index = state.todos.findIndex(({ id }) => id === payload.id)
        state.todos.splice(index, 1)
      })
      .addMatcher(todosApi.endpoints.deleteTodo.matchRejected, (state, action) => {
        const index = state.todos.findIndex(({ id }) => id === action.meta.arg.originalArgs)
        state.todos.splice(index, 1)
      })
  }
})

export const getTodoListState = (state: { todo: TodoSliceState }) => state.todo
