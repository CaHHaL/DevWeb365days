//EJC
// Embeded JavaScript templates
//Handlebar can also be used
let express = require("express");
let app = express();
const path = require("path");
app.set("view engine", "ejs");
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
      const followers =["Cahal","Shivani","Aryan","Binit"];
    let { username } = req.params;
  
  res.render("instagram.ejs", { username, followers });
});
