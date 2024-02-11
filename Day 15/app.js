//Building more concepts in arrow function

let square=(n)=>{
    return n**2;
};
console.log(square(2));

//Or we can write
let square1 = (n)=>(n**2);
console.log(square1(5));

//A function that prints hello world 5 times in a interval of 2s;
let id=setInterval(()=>{
   console.log("Hello World");
    },2000);
    setTimeout(()=>{
        return clearInterval(id)
    },12000);

//An arrow function that takes input of an array and gives the return of the average of them 
let averageArrow=(arr)=>{
    let sum=0;
    for(let number of arr){
        sum+=number;
    }
    return sum/arr.length;
}   
let arr=[1,2,3,4,5,6,7,8,9,10]; 
console.log(averageArrow(arr));

//Write an arrow function and check whether it is even or odd

let event=(Check_number)=>{
    if(Check_number % 2 ==0){console.log("It is even");}
    else{
        console.log("It's is odd");
    }
}
let Check_number=46;
console.log(event(Check_number));

//Understanding the use of foreach method
let arr1=["CaHaL","Shivani","Sakshi"];
arr1.forEach(function(el){
    console.log(el);
});
