const btns=document.querySelector("button");
for(btn of btns){
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
    });
}