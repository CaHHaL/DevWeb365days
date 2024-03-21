const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee=mongoose.model("Employee",userSchema);

//Inserting a single document in db
// const user1 = new User({
//     name:"Cahal Agarwalla",
//     email:"cahalagarwapoiujhg@gmail.com",
//     age:18,

// });
// user1.save();

//Inserting a single document in db
// const user2 = new User({
//     name:"Ravi",
//     email:"ravi@gmail.com",
//     age:19,
// });
// user2.save();

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Hari", email: "Hari@gmail.com", age: 50 },
// ]).then((res) => {
//   console.log(res);
// });

//for inserting multiple document in the collections
//Operation buffering in Mongoose
//It basically help us to write the schema , insertation are other such queries before making the connection to the db
//Model.find() is not a promise but we can use the then method with it.

// User.find({age:{$gt:47}}).then((res) => {
//   console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });
//using the condition to print the collection


// User.find({}).then((res) => {
//     console.log(res[0].name);
//   })
//   .catch((err)=>{
//       console.log(err);
//   });
  //show all the document in the collection


//to show one 
//   User.findOne({age:{$gt:47}}).then((res) => {
//   console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//to show one with id 
User.findOne({_id:"65fc6812570c508cb5a084ab"}).then((res) => {
    console.log(res);
  })
  .catch((err)=>{
      console.log(err);
  });


  User.findById("65fc6812570c508cb5a084ab").then((res) => {
    console.log(res);
  })
  .catch((err)=>{
      console.log(err);
  });