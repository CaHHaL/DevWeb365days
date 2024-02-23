//ajax
//Asynchronous javascript and xml
//http verbs like get,post,delete
//status code
//200 for ok
//404 for not found
//400 forbad request
//500 internal server error
//adding information in url's
//http header

// let url = "https://catfact.ninja/facts";
// async function getfacts() {
//   try {
//     let res = await fetch(url);
//     let final = await res.json();
//     console.log(final.fact);
//     console.log("Checked");
//   } catch (err) {
//     console.log("Kuch toh garbar hai ");
//   }
// }

//Axios

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getfacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});
let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error -", e);
    return "NO fact found";
  }
}
