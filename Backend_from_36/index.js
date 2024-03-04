//EJC
// Embeded JavaScript templates
//Handlebar can also be used
let express = require("express");
let app = express();
const path = require("path");
app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname,"public")));//Specifies the static location of the file
app.use(express.static(path.join(__dirname,"public/css")));//We can add multipal files and foldders//Specifies the static location of the file
app.use(express.static(path.join(__dirname,"public/js")));//Specifies the static location of the file
app.set("views", path.join(__dirname, "/views"));

let port = 8080;
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, () => {
  console.log("listening");
});
//interpolation syntax
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
     let { username }=req.params;
      const instaData=require("./data.json");
     const data = instaData[username];
     if(data){
      res.render("instagram.ejs",{ data });

     }else{
      res.render("error.ejs");
     }
     
  
  res.render("instagram.ejs",{data:instaData});
});
