import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/TodoSlice';
export const store=configureStore({
    reducer: todoReducer,
});




