const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
const helmet =require("helmet");

// app.use((req, res, next) => {
//   console.log("First middleware");
//   return next();
//   //return nex() is prefered because after that anything is not executed where as if we simply write the next() that it executes the below statement too.
// });
// app.use((req, res,next) => {
//   console.log("Seecond middleware");
//   return next();
// });

// app.use((req, res, next) => {
//       console.log(req);
//       next();
//     });
app.use(helmet());
app.use("/err/err", (req, res) => {
  abc = abc;
});

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.pathname, req.time);
  next();
});
//Date.now() give us the current date and time
// app.use((req, res, next) => {
//       console.log(req);
//       next();
//     });

// const checkToken = (req, res,next) => {
//     let {token}=req.query;
//     if(token=="giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
//   };
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
  //show it as an error in the page
};
//creating middleware function so to access it anywhere
app.use("/api", checkToken, (req, res) => {
  res.send("ACCESS APPROVED DATA");
});

// app.use("/", (req, res) => {
//   res.send("root route");
// });
app.use("/random", (req, res) => {
  res.send("Random route");
});
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error found" } = err;
  //dafault status code and default message when nothing is found
  res.status(status).send(message);
});
app.use("/admin",(req,res)=>{
  throw new ExpressError(403,"ACCESS TO ADMIN DENIED!")
});
app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name=="ValidationError"){
    console.log("This was a Validation error.Please follow rules");
    
  }
  next(err);
});

function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err));
  };
};


app.listen(8080, () => {
  console.log("port listening");
});
