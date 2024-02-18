let inp =document.querySelector("input");
let btn =document.querySelector("button");
let ul =document.querySelector("ul");
btn.addEventListener('click',function(){
let lis =document.createElement('li');
lis.innerText=inp.value;
ul.appendChild(lis);
let remove =document.createElement('button');
remove.innerText="Remove";
lis.appendChild(remove);
});
ul.addEventListener('click',function(event){
    if (event.target.nodeName=="BUTTON"){
        let list=event.target.parentElement;
        list.remove();
    };
});
