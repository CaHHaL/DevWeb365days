//Building out some concepts in JS operators and arrays
let a=prompt("Enter your name");
let arr=[];
let num=100;
for(let i=0;i<=num;i++){
    if(i%2==0){
        arr.push("Even");
    }
    else{
        arr.push("odd");
        // console.log(arr)
    }
}
console.log(arr)