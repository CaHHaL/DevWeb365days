//For model 1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

//Defining Schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:"https://unsplash.com/photos/a-tall-wooden-building-sitting-next-to-a-snow-covered-mountain-OB62rSdkmw0",
    set:(v)=>v==""?"https://unsplash.com/photos/a-tall-wooden-building-sitting-next-to-a-snow-covered-mountain-OB62rSdkmw0":v,
    //sets an default image link if we dont enter a image link

  },
  price: Number,
  location: String,
  country: String,
  reviews:[{
    type:Schema.Types.ObjectId,
    ref:"Review",
  },],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },

});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
  await Review.deleteMany({_id:{$in: listing.reviews}});
  }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing ;
