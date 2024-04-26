const express=require("express");
const app=express();
const users=require("./routes/get.js");
const posts=require("./routes/post.js");
const cookieParser=require("cookie-parser");


app.use(cookieParser("secretcode"));
app.get("/getcookie",(req,res)=>{
    res.cookie("name","value",{signed:true});
    res.send("Hello cookie send");
});


app.get("/",(req,res)=>{
    res.send("Hello,I am root");
});


app.use("/users",users);
app.use("/posts",posts);



app.listen(3000,()=>{
    console.log("Listings to port 3000");
});

//used cookie-parser npm package

//What is state?
//stateful protocol
//stateful protocol require server to save the status and session information
//eg. ftp
//session info


//stateless protocol
//stateless protocol does not require the server to retain the server information 
//eg. http

//express session 
//expresss-session package
//In a event 