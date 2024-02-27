var figlet = require("figlet");

figlet("Chhipkali", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// It deals with the dependencies informations like name , version and any other metadata
