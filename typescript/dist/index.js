"use strict";
// let age:number=54;
// if(age<50)
//     age+=10;
var _a;
// build in types
//any 
let num;
// here num is assign 'any' datatype which can be asssign any datatype later
//arrays
let arrNum = [1, 2, 3];
arrNum.forEach(n => n.toExponential);
arrNum.forEach(n => n.toString);
arrNum.forEach(n => n.toFixed);
//This are not available with JS
//tuple
let user = [1, 'heloo'];
user[1].length;
user[0];
//enum
//const small=1
//const medium=2
//const large=3
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
;
;
let mySize = size.medium;
let myRectangle = 7 /* rectangle.CD */;
console.log(mySize);
console.log(myRectangle);
//function
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
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
let employees = {
    id: 1,
    name: 'Cahal',
    retire: (date) => {
        console.log(date);
    }
};
//This type student can be used with multiple objects
let student = {
    id: 1,
    name: "Cahal Agarwall",
    retire: (date) => {
        console.log(date);
    }
};
//function narrowing 
function KgToLbs(weight) {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
;
KgToLbs(10);
KgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
//using null/undefined value as parameter in typescript
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('It is invalid');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
//optional property access operator
// if(customer !== null && customer !== undefined)
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear()); //this ?. this is optional property access operator
//Optional element access operator (used with arrays)
// if(customers !== null && customers !== undefined)
// customers[0]
// so if use customers?.[0]
//Optional Call
// let log: any =(message: string)=> console.log(message)
let log = null;
log === null || log === void 0 ? void 0 : log('a');
