// let age:number=54;
// if(age<50)
//     age+=10;

// build in types
//any 
let num;
// here num is assign 'any' datatype which can be asssign any datatype later

//arrays
let arrNum=[1,2,3];
arrNum.forEach(n=> n.toExponential);
arrNum.forEach(n=> n.toString);
arrNum.forEach(n=> n.toFixed);
//This are not available with JS

//tuple
let user: [number,string]=[1,'heloo'];
user[1].length;
user[0];

//enum
//const small=1
//const medium=2
//const large=3

enum size{small,medium,large};
//my default small=0,medium=1 and so on
const enum rectangle{AB=5,BC,CD};
let mySize: size=size.medium;
let myRectangle: rectangle=rectangle.CD;
console.log(mySize);
console.log(myRectangle);

//function
function calculateTax(income: number, taxYear=2022): number{
    if(taxYear<2022)
        return income *1.2;
    return income * 1.3;
}

calculateTax(10000);

//objects

// let employees={id:10};
// employees.name="Cahal";
//THis invalid in typescript where as it is valid in javascript

// let employees:{
//     id:number,
//     name?:string //not prefer to use ?
// }={id:1};
// employees.name="Cahal";

let employees:{
   readonly id:number, 
    name:string, //not prefer to use ?
    retire:(date:Date)=>void
}={
    id:1,
    name:'Cahal',
    retire:(date:Date)=>{
        console.log(date);
    }
};

//Type aliases,Unions and intersection,
//Type narrowing,Nullable Types, The unknown types, The never types

//TYPE ALIASES
type student={
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
//This type student can be used with multiple objects
let student:student={
    id:1,
    name:"Cahal Agarwall",
    retire:(date:Date)=>{
        console.log(date);
    }
}
//function narrowing 
function KgToLbs(weight: number | string): number{ //union type
    //Narrowing
    if( typeof weight==='number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
    
};
KgToLbs(10);
KgToLbs('10kg');

//function narrowing
//intersection
type Draggable={
    drag:()=>void
};

type Resizable={
    resize:()=>void
};

type UIWidget =Draggable & Resizable;
let textBox: UIWidget={
    drag:()=>{},
    resize:()=>{}
};

//Literal(exacr ,specific)
type Quantity=50 | 100; //literal type
let quantity: Quantity=50;

type Metric='cm' | 'inch';

//using null/undefined value as parameter in typescript
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('It is invalid');
}
greet(undefined);
//optional chaining
type Customer={
    birthday?:Date
};
function getCustomer(id:number): Customer | null | undefined {
    return id=== 0? null : {birthday: new Date()};
}
let customer=getCustomer(0);
//optional property access operator
// if(customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());//this ?. this is optional property access operator

//Optional element access operator (used with arrays)
// if(customers !== null && customers !== undefined)
    // customers[0]
// so if use customers?.[0]

//Optional Call
// let log: any =(message: string)=> console.log(message)
let log: any=null;
log?.('a');