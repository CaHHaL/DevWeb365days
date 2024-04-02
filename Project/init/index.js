const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
//bhaiya require karna mai error araha hai


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

const initDB = async () => {
  await Listing.deleteMany({});
  //Deleting the complete dB
  await Listing.insertMany(initData.data);
  //THen inserting the complete data from data.js
  console.log("data was initialized");
};

initDB();
