import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlices/auth'
import tasksReducer from "./tasksSlices/tasks";

export default configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer
  }
})