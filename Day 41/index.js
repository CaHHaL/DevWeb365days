const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true })); //show that all the request get prase

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: "a1", username: "cahalagarwalla", content: "Coding" },
  { id: "a2", username: "amanagarwalla", content: "Coding" },
  { id: "a3", username: "soravagarwalla", content: "Coding" },
  { id: "a4", username: "princeagarwalla", content: "Coding" },
  // { id: "a5", username: "aravagarwalla", content: "Coding" },
  // { id: "a6", username: "surajagarwalla", content: "Coding" },
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let post = posts.find((p) => id === p.id);

  res.render("show.ejs",{post});
});
app.listen(port, () => {
  console.log("listening to port: 8080");
});
