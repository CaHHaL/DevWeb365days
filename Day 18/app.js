let btn= document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText = "delete";
    //delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});


ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON");
        let item=event.target.parentElement;
        item.remove();
    

});