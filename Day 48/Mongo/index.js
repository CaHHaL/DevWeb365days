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
// User.findOne({_id:"65fc6812570c508cb5a084ab"}).then((res) => {
//     console.log(res);
//   })
//   .catch((err)=>{
//       console.log(err);
//   });


//   User.findById("65fc6812570c508cb5a084ab").then((res) => {
//     console.log(res);
//   })
//   .catch((err)=>{
//       console.log(err);
//   });



// User.updateOne({name:"Tony"},{age:12}).then(res=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
//Used for modifying the content of the collection
//single 


// User.updateMany({age:{$gt:49}},{age:66}).then(res=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
//with multiply documents

// User.findOneAndUpdate({name:"Tony"},{age:65}).then(res=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
//It first finds then prints the output and then it updates the result


// User.findOneAndUpdate({name:"Tony"},{age:62},{new:true}).then(res=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
//its finds updates and then prints the updated value 


// User.findByIdAndUpdate({_id:'65fc6812570c508cb5a084ab'},{age:61},{new:true}).then(res=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
//changing by id and update


// User.deleteOne({name:"Tony"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
//doesn't show what delted in the console so the other method's are used 



// User.findByIdAndDelete('65fc642356c45cb9f8c51981').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });


// User.findOneAndDelete({name:"Tony"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });




