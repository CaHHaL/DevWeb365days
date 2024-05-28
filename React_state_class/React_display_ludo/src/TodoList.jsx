import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"Sample-task",id: uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");


    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{ task: newTodo,id: uuidv4()}];
        });
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>(todos.filter((prevTodos)=>prevTodos.id!=id)));
    };
    return (
        <div>
            <h3>Todo App</h3>
            <input  placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
          
            <button onClick={addNewTask}>Add</button>
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo)=>(
                <li key={todo.id}>
                   <span>{todo.task}</span>
                   &nbsp;&nbsp;&nbsp;
                   <button onClick={()=>{deleteTodo(todo.id)}}>delete</button>
                   </li>
                )
                )}
                
            </ul>
        </div>
        
    );
}