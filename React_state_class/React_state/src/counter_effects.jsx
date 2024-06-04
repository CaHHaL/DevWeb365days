import { useState,useEffect } from "react";

export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    let handlex=()=>{
        setCountx((currCount)=>currCount+1);
    };
    let handley=()=>{
        setCounty((currCount)=>currCount+1);
    };
    useEffect(function printSomething(){
        console.log("This is a side-effect");
    },[countx,county]);
    return (
        <div>
            <h2>Count = {countx}</h2>
            <button onClick={handlex}>+1</button>
            <h2>Count = {county}</h2>
            <button onClick={handley}>+1</button>
        </div>
    )
}