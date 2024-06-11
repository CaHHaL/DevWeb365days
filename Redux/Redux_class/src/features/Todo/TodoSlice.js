import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState ={
    todos:[{id:"qwe",task:"demo_task",isDone:false}],
};
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
//state,action
    addTodo:(state,action)=>{
        const newTodo={
            id:nanoid(),
            task:action.payload,
            isDone:false,
        }
        state.todos.push(newTodo);//direct mutation redux toolkit do it
    },
    deleteTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=> todo.id != action.payload);
    },
        marksAsDone:(state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.isDone=true;
                }
            });
        },
    
    },
});
export const {addTodo,deleteTodo,marksAsDone}= todoSlice.actions;
export default todoSlice.reducer;