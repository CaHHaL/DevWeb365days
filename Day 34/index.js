//EJC
// Embeded JavaScript templates
//Handlebar can also be used
let express = require("express");
let app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));

let port = 8080;
app.get("/", (req, res) => {
  res.render("home.ejc");
});
app.listen(port, () => {
  console.log("listening");
});
//interpolation syntax
