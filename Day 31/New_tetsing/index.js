var figlet = require("figlet");

figlet("Good morning Coders", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// It deals with the dependencies informations like name , version and any other metadata
//Some keys to be remember that for a good programmer it is always adviced to use only import or require any one of them throught the single program
//Always use local installation either than global
//We should never upload the node_module in git or while sharing the file one can download it by seeing the package_json
//Import has some advantages like we can select a particular piece of code either than the full file which was a problem in require
