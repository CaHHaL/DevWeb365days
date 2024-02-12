

let inp=document.querySelector("input");
inp.addEventListener("keydown", function(event){
  console.log("code=",event.code);  
  if(event.code == "ArrowRight"){
    console.log("character moves to right");}
  else if(event.code == "ArrowLeft"){
    console.log("character moves left");
  }
  else if (event.code == "ArrowUp"){
    console.log("character moves up");

  }
  else if (event.code == "ArrowDown"){
    console.log("character moves down");

  }
    
  

  });