//What is call stack?
//stack works on the principle of LIFO(Last in first out)
//It is like a container where all the functions are stacked one upon other.
function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  return two() + one();
}
three();
console.log(three());

//JS is single threaded
//Promises in JS
//There are three state of promises i.e pending,rejected(error) or fulfilled(resolved)
function savetoDb(data) {
  return new Promise((resolve,reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: Data is saved");
    } else {
      reject("failure: Data is not saved");
    }
  });
}
// savetoDb("The data to be saved in the Db");
//then and catch (then for fulfilled and catch for rejected one)

savetoDb("The data to be saved in the Db")
.then((resolve)=>{
  console.log("Data 1 saved");
  console.log("The result of promise:",resolve);
  return savetoDb("The second data to be saved in Db");
})
.then((resolve)=>{
  console.log("Data 2 saved");
  console.log("The result of promise:",resolve);
  return savetoDb("The third to be saved in Db");
})
.then((resolve)=>{
  console.log("Data 3 saved");
  console.log("The result of promise:",resolve);
})
.catch((reject)=>{
  console.log("Promise was rejected");
  console.log("The result of promise:",reject);
});



