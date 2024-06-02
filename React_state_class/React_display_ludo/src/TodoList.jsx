import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"Sample-task",id: uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{ task: newTodo,id: uuidv4(),isDone:false}];
        });
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>(todos.filter((prevTodos)=>prevTodos.id!=id)));
    };
    let upperCaseAll=()=>{
        setTodos((prevTodos)=>(prevTodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase()
            };
        })));
    };
    let UpperCaseOne = (id) => {
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
           if (todo.id == id){
            return{
                ...todo,
                task: todo.task.toUpperCase(),
                
           };
        } else{
                return todo;
            }
        }));

    };
    let markDone = (id) => {
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
           if (todo.id == id){
            return{
                ...todo,
                isDone:true,
                
           };
        } else{
                return todo;
            }
        }));

    };
    let markAllDone=()=>{
        setTodos((prevTodos)=>(prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };
        })));
    };
    
    return (
        <div id="mainDiv">
            <h3>Todo App</h3>
            <input  placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>        
            <button onClick={addNewTask}>Add</button>
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo)=>(
                <li key={todo.id}>
                   <span style={todo.isDone ?{textDecoration:"line-through",color:"red"}:{}}>{todo.task}</span>
                   &nbsp;&nbsp;
                   <button onClick={()=>{deleteTodo(todo.id)}}>delete</button> &nbsp;
                   {/* <button onClick={()=>{UpperCaseOne(todo.id)}}>UpperCase</button> &nbsp; */}
                   <button onClick={()=>{markDone(todo.id)}}>Mark as done</button> &nbsp;
                   </li>
                )
                )}
                 <button onClick={upperCaseAll}>UpperCaseAll</button>&nbsp;
                 <button onClick={markAllDone} >Mark All as done</button>
                
            </ul>  
        </div>
        );}




























