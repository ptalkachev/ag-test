import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { appApi } from './api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todoSlice } from './slices/todoSlice'

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  [todoSlice.name]: todoSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware)
})

setupListeners(store.dispatch)
