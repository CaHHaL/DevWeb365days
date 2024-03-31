//This file is used to insert the date to the db...It is craeted to just insert the data

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection succesful");
  })
  .catch((err) => {
    consoler.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allchats = [
  {
    from: "Ironman",
    to: "Cahal",
    msg: "Give me some power",
    created_at: new Date(),
  },
  {
    from: "Spiderman",
    to: "cahal",
    msg: "Give me some web",
    created_at: new Date(),
  },
  {
    from: "Superhero",
    to: "Cahal",
    msg: "Give me some Energy",
    created_at: new Date(),
  },
  {
    from: "Thor",
    to: "cahal",
    msg: "Give me some Fire",
    created_at: new Date(),
  },
];
Chat.insertMany(allchats);
// chat1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
