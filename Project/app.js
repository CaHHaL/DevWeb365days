//Requiring all the npm packets
if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
};
const express = require("express");
let app = express();
const mongoose = require("mongoose");
const path = require("path");
//require path for views folder to use the ejs files
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError.js");
const session=require("express-session");
const flash = require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


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
// app.get("/", (req, res) => {
//   res.send("HI my name is cahal");
// });

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

//connect-flash and express-session
//cookies 
const sessionOptions = {
  secret:"mysupersecretcode",
  resave:false,
  saveUninitialized:true,
  cookie:{
    experies:Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly:true,
  }
};
app.use(session(sessionOptions));
app.use(flash());
//passport authenticate
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/demouser",async(req,res)=>{
  let fakeUser = new User({
    email:"cahal@gmail.com",
    username:"Cahal21"
  });
  let registerUser=await User.register(fakeUser,"helloworld");
  res.send(registerUser);
});

app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
  next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);






// app.use((err, req, res, next) => {
//   res.send("Something went wrong");
// });
//for handling the error

app.all("*", (req, res, next) => {
  next(new expressError(404, "Page Not Found!"));
});
//if no route is found then this will be displayed

app.use((err, req, res, next) => {
  let { statusCode = "500", message = "Something went Wrong!!" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { message });
});

//listening at port number 8080
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
