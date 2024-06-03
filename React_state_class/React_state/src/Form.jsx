import { useState } from "react"

export default function Form(){
    let [formName,setFormName]=useState({
        fullName:"",
        userName:"",
        password:""
    });
    let handleInput=(event)=>{
        let fieldName = event.target.name;
        let newValue=event.target.value;
        setFormName((currData)=>{
           
            return{...currData,[fieldName]:newValue};
        });
    };
    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormName({
            fullName:"",
            userName:"",
            password:""
        }); 
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name </label>
            <input type="text" placeholder="Enter your full name" value={formName.fullName} id="fullName" onChange={handleInput} name="fullName"/>
            <br /><br /><br />
            <label htmlFor="username">User Name </label>
            <input type="text" placeholder="Enter your User name" value={formName.userName} id="username" onChange={handleInput} name="userName"/>
            <br /><br />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" value={formName.password} id="password" onChange={handleInput} name="password"/>
            <button>Submit</button>
        </form>
    )
}