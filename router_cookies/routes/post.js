const express=require("express");
const app=express();
const router=express.Router();


router.get("/some",(req,res)=>{
    res.send("some");
});

router.get("/hi",(req,res)=>{
    res.send("Hi");
});


router.get("/hello",(req,res)=>{
    res.send("Hello");
});

module.exports=router;