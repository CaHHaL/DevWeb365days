const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true })); //show that all the request get prase

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "cahalagarwalla",
    content: "Coding",
  },
  {
    username: "amanagarwalla",
    content: "Coding",
  },
  {
    username: "soravagarwalla",
    content: "Coding",
  },
  {
    username: "princeagarwalla",
    content: "Coding",
  },
  {
    username: "aravagarwalla",
    content: "Coding",
  },
  {
    username: "surajagarwalla",
    content: "Coding",
  },
];
app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts});
});

app.listen(port, () => {
  console.log("listening to port: 8080");
});
