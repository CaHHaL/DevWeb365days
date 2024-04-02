//For model 1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing ;
