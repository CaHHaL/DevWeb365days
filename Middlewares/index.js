const express = require("express");
const app = express();

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

app.use((req, res, next) => {
    req.time=new Date(Date.now()).toString();
      console.log(req.method,req.hostname,req.pathname,req.time);
      next();
    });
    //Date.now() give us the current date and time
// app.use((req, res, next) => {
//       console.log(req);
//       next();
//     });


    
const checkToken = (req, res,next) => {
    let {token}=req.query;
    if(token=="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
  };
  //creating middleware function so to access it anywhere
app.use("/api",checkToken,(req,res)=>{
    res.send("ACCESS APPROVED DATA");
});
    
app.use("/", (req, res) => {
  res.send("root route");
});
app.use("/random", (req, res) => {
  res.send("Random route");
});
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(8080, () => {
  console.log("port listening");
});
