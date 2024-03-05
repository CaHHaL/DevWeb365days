// Factory function
function Personmaker(name, rollno) {
  const person = {
    name: name,
    rollno: rollno,
    talk() {
      console.log(`Hi,my name is ${this.name}`);
    },
  };
  return person;
}
let p1 = Personmaker("Cahal", 25);
let p2 = Personmaker("Rahul", 20);
//This is also not optimized way to write a code because in this for each
//p1 and p2 the space is alloted separatly

//The best way is using constructor
// the constructor in JS startes with capital and does not return anything
//Use of new keyword
//This is also operator
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.talk = function () {
  console.log(`Hi,my name is ${this.name}`);
};
let p3 = new Person("cahal", 18);
let p4 = new Person("Aman", 19);
//here p3.talk==p4.talk because they both have the same prototype

//Class
class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi,my name is ${this.name}`);
  }
}
let p5 = new Persons("Cahal", 18);
let p6 = new Persons("Aman", 19);
//no need to mention the prototype for class as they are refering to the same copy
//Inheritance in OOPS
//extend keyword is used to inheritance some of the property of the parent class or tyhe base class

class Human {
  constructor(name, age) {
    console.log("Human class constructor");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`MY name is ${this.name}`);
  }
}

class Student extends Human {
  constructor(name, age, marks) {
    console.log("Student class constructor");
    super(name,age);//Parent class constructor is been called here
    this.marks = marks;
  }
  
}
class Teacher extends Human {
  constructor(name, age, course) {
    console.log("Teacher class constructor");
    super(name,age);//Parent class constructor is been called here
    this.course = course;
  }
  
}
