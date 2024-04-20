//Requiring all the npm packets
const express = require("express");
let app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
//require path for views folder to use the ejs files
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review = require("./models/review.js");


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
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
//path of the static css in the public folder

//servere site validation schema for listings
const validateListing =(req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
    if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }
    else{
      next();
    }
};


//servere site validation schema for reviews
const validateReview =(req,res,next)=>{
  let {error}=reviewSchema.validate(req.body);
    if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }
    else{
      next();
    }
};

//Index Route
app.get("/listings", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get("/listing/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("listings/show.ejs", { listing });
}));

//Create Route
app.post(
  "/listings",validateListing,
  wrapAsync(async (req, res) => {
    // let {title,description,image,price,country,location}=req.body; method 1 for the post request
  //  if(!req.body.listing){
  //   throw new expressError(400,"Sens valid data for listing");
  //  }
    const newListing = new Listing(req.body.listing);
    //here we are using the instance of the new created listing
    await newListing.save();
    res.redirect("/listings");
  })
);

//Edit Route
app.get("/listings/:id/edit",wrapAsync( async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

//Update ROute
app.put("/listings/:id",validateListing,wrapAsync( async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listing/${id}/`);
}));

//Delete Route
app.delete("/listings/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));

//Reviews 
//post route
app.post("/listings/:id/reviews",validateReview,wrapAsync(async(req,res)=>{
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  res.redirect(`/listing/${listing._id}`);
  console.log("new review");
  // res.send("new review save");
}));


//Reviews
//Delete Route
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
  let {id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listing/${id}`);
  // console.log("done");
}));


// app.use((err, req, res, next) => {
//   res.send("Something went wrong");
// });
//for handling the error

app.all("*",(req,res,next)=>{
  next(new expressError(404,"Page Not Found!"));
});
//if no route is found then this will be displayed

app.use((err,req, res, next) => {
  let { statusCode="500", message="Something went Wrong!!" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs",{message});
});

//listening at port number 8080
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
