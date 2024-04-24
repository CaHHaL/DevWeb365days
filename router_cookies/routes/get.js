const express=require("express");
const app=express();
const router=express.Router();


router.get("/cookies/id",(req,res)=>{
    res.send("Hello");
});

router.get("/cookies/new",(req,res)=>{
    res.send("Hello");
});


router.get("/cookies/post",(req,res)=>{
    res.send("Hello");
});

module.exports=router;