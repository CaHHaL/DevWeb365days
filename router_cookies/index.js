const express=require("express");
const app=express();
const users=require("./routes/get.js");
const posts=require("./routes/post.js");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions={
    secret: 'somethingverysecret',
    resave: false,
    saveUninitialized: true
  }
app.use(session(sessionOptions));
app.use(flash());

app.get("/register",(req,res)=>{
   let { name="Guest" }= req.query;
   req.session.name= name;
   req.flash("success","User registered successfully!");
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
    // res.send(`hello,${req.session.name}`);
    res.locals.message=req.flash("success");
    res.render("page.ejs",{name:req.session.name});
});

// app.get("/reqtest",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count=1;
//     }
//     res.send(`Request count is ${req.session.count}`);
// });


// app.use(cookieParser("secretcode"));
// app.get("/getcookie",(req,res)=>{
//     res.cookie("name","value",{signed:true});
//     res.send("Hello cookie send");
// });


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