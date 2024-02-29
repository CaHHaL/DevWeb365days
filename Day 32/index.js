//Starting with Express
const express = require("express");
const app = express();
console.dir(app);

let port = 3000;
app.listen(port, () => {
  console.log(`You are currently on the port number ${port}`);
});

// app.use((req, res) => {
//   console.log("Request accepted");
//   let code = "<h1>Welcome to the server</h1> <ul><li>Cahal Agarwalla</li></ul>";
//   res.send(code);
// });

app.get("/", (req, res) => {
  res.send("This is the root path");
});
app.get("/apple", (req, res) => {
  res.send("This is the apple path");
});
app.get("/help", (req, res) => {
  res.send("This is the help path");
});
app.get("*", (req, res) => {
  res.send("This path is not available");
});
///Nodemon installation issue //Need to check it once again

//Variable path
app.get("/:username/:password", (req, res) => {
  let { username, password } = req.params;
  res.send(
    `Welcome ${username} Your user name is ${username} and password is ${password}`
  );
});
