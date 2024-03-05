const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//to read json format data also.
//To work with post type method we use this line inorder to read and print the data

app.listen(port, () => {
  console.log(`Listeing to the port number ${port}`);
});
app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Standard get request ${user}`);
  
});
app.post("/register", (req, res) => {
    let {user,password}=req.body;
    console.log(req.body);
  res.send(`Standard post request Welcome ${user}`);
 
});
