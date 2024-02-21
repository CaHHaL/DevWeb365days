//async function learn about throw keyword to throw the  error
async function greet() {
  throw "404 error";
  return "hello!";
}
greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was: ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });
//asyncs function and use of await
h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
    changeColor("purple", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }
  let sum = 1 + 2;
  console.log(sum);
}

//Working with API usage
//Application programing interface
//web API's data generally comes in json format
//catfact.ninja/facts
//Javascript object notation(JSON)
//Accessing JSON data
let jsonContent =
  '{"current_page":1,"data":[{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114},{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97},{"fact":"The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d","length":54},{"fact":"A group of cats is called a \u201cclowder.\u201d","length":38},{"fact":"A cat can\u2019t climb head first down a tree because every claw on a cat\u2019s paw points the same way. To get down from a tree, a cat must back down.","length":142},{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62},{"fact":"Every year, nearly four million cats are eaten in Asia.","length":55},{"fact":"There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.","length":100},{"fact":"Approximately 24 cat skins can make a coat.","length":43},{"fact":"While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.","length":278}],"first_page_url":"https://catfact.ninja/facts?page=1","from":1,"last_page":34,"last_page_url":"https://catfact.ninja/facts?page=34","links":[{"url":null,"label":"Previous","active":false},{"url":"https://catfact.ninja/facts?page=1","label":"1","active":true},{"url":"https://catfact.ninja/facts?page=2","label":"2","active":false},{"url":"https://catfact.ninja/facts?page=3","label":"3","active":false},{"url":"https://catfact.ninja/facts?page=4","label":"4","active":false},{"url":"https://catfact.ninja/facts?page=5","label":"5","active":false},{"url":"https://catfact.ninja/facts?page=6","label":"6","active":false},{"url":"https://catfact.ninja/facts?page=7","label":"7","active":false},{"url":"https://catfact.ninja/facts?page=8","label":"8","active":false},{"url":"https://catfact.ninja/facts?page=9","label":"9","active":false},{"url":"https://catfact.ninja/facts?page=10","label":"10","active":false},{"url":null,"label":"...","active":false},{"url":"https://catfact.ninja/facts?page=33","label":"33","active":false},{"url":"https://catfact.ninja/facts?page=34","label":"34","active":false},{"url":"https://catfact.ninja/facts?page=2","label":"Next","active":false}],"next_page_url":"https://catfact.ninja/facts?page=2","path":"https://catfact.ninja/facts","per_page":10,"prev_page_url":null,"to":10,"total":332}';
let result = JSON.parse(jsonContent);

let employee = {
  name: "cahal",
  address: "Punjab",
  course: "btech cse",
  year: "2nd",
};
let jsonformat = JSON.stringify(employee);

//testing api requests ,tools name:-Postname,hoppscoth
