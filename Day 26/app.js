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

let url = "http://universities.hipolabs.com/search?name=";
let btn= document.querySelector("button");

btn.addEventListener("click", async()=>{

    let country = document.querySelector("input").value;
    console.log(country);

    let colArr= await getcolleges(country);
    show(colArr);
    

});

function show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement("li")
        li.innerText=col.name;
        list.appendChild(li);
        console.log(col.name);

    }
}

async function getcolleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;

    }catch(e){
     console.log("error : ",e);
     return [];   
    }
}