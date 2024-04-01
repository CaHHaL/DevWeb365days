//Requiring all the npm packets
const express = require("express");
let app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

//Mongo url
//Mongoose establisment
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}


//Creating an route
app.get("/", (req, res) => {
  res.send("HI my name is cahal");
});

//listing an sample in the dBS
app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute Goa",
    country: "India",
  });
  await sampleListing.save();
  console.log("sample was saved");
  res.send("Successful testing");
});



//listening at port number 8080
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
