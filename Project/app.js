//Requiring all the npm packets
const express = require("express");
let app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
//require path for views folder to use the ejs files
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


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
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute Goa",
//     country: "India",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("Successful testing");
// });

//setting for the path of ejs file in views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//for parshing the data
app.use(express.urlencoded({ extended: true }));
//using method-override for put method
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);



//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//Create Route
app.post("/listings", async (req, res) => {
  // let {title,description,image,price,country,location}=req.body; method 1 for the post request
  const newListing = new Listing(req.body.listing);
  //here we are using the instance of the new created listing
  await newListing.save();
  res.redirect("/listings");
});


//Edit Route
app.get("/listings/:id/edit",async (req,res)=>{
  let { id } =req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs",{ listing });
});


//Update ROute
app.put("/listings/:id", async(req,res)=>{
  let { id } =req.params;
  await Listing.findByIdAndUpdate(id,{...req.body.listing});
  res.redirect(`/listing/${id}/`);
});


//Delete Route
app.delete("/listings/:id", async(req,res)=>{
  let {id}=req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

//listening at port number 8080
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
