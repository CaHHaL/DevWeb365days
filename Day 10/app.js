//Qs1.Write a JS program to delete all occurrences of element ‘num’in a given array.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2Resultshouldbearr=[1,3,4,5,6,3]


let arr=[1,2,3,4,5,6,7,8,8,9,9,10];
let num=prompt("Enter a number=");
for(let i=0;i<=arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
        //console.log(arr);
    }
    
}console.log(arr);



//Working with object in JS



const Post={
    username:"cahal.21",
    content:"Personal blog",
    likes:"150-300",
    reposts:5,
    tags: 5
}
console.log(Post);
console.log(Post["content"]);
console.log(Post["likes"]);
console.log(Post.content);
comsole.log(Post.likes);



// Post.content="Personal blog and Articles";
// Post.comments = 150;
// delete Post.tags;



///UNderstanding the concept of some of the functions in javascript and also with closure and callbacks

function printTextWithDelay(someText){
    setTimeout(function (){
        console.log("Hi!, This Cahal");
        console.log(someText)
    },);
}
printTextWithDelay("Let's check the delay in the statment");
