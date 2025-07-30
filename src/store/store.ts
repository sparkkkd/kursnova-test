import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'

const rootReducer = combineReducers({
	uiReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
