let  btn=document.querySelector("button");
btn.addEventListener("click", function(){
  let h3=document.querySelector("h3");
  let randomcolor=getrandomcolor();
  h3.innerText=randomcolor;
  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;
  console.log("color updated");
   
 

});
function getrandomcolor(){
  
  let red=Math.floor(Math.random() * 255);
  let green=Math.floor(Math.random() * 255);
  let blue=Math.floor(Math.random() * 255);
  let color=`rgb(${red}, ${green}, ${blue})`;
  return color;
}


//javascript is a single threatened langage is uses browser c++ for some of its work 
//and it works line by line and this nature is called synchrous nature
//when we uses some of its feature like settimeout etc,then we make it asynchrous nature
// setTimeout(function(){
//     console.log("apna college");
// },2000);
// console.log("hello....");


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);