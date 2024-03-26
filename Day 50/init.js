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
    from: "rahul",
    to: "cahal",
    msg: "send me your paper",
    created_at: new Date(),
  },
  {
    from: "ravi",
    to: "cahal",
    msg: "send me your notes",
    created_at: new Date(),
  },
  {
    from: "Prince",
    to: "cahal",
    msg: "send me your assignment",
    created_at: new Date(),
  },
  {
    from: "chhipkali",
    to: "cahal",
    msg: "send me your test paper",
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
