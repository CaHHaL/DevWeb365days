import { useState } from "react";
function init(){
    console.log("Init function is executed");
    return Math.random();
}
export default function Counter(){
    let [count,setCount]= useState(init);
    console.log("It is re-rendered!");
    let incCount=()=>{
        setCount((currCount)=>{
            
            console.log(currCount);
            return currCount +1;
        });
        setCount((currCount)=>{
            console.log(currCount);
            return currCount +1;
        });
        // setCount(25);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}