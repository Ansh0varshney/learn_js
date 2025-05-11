// dynamically typed language

var a = 10; // varibale can be redeclared and updated 
let b = 20; // variable can be updated but not redeclared
const c = 30; // variable cannot be updated or redeclared

// objects are instances of classes 
// objects collection of properties and methods
// properties are variables that belong to the object (data)
// methods are functions that belong to the objects (function)


const student = {
    name: "John",
    age: 20,
    isStudent: true,
    subjects: ["Math", "Science", "English"]
}
// object is a collection of key-value pairs
// student is an object 
// name, age, isStudent, subjects are properties
// greet is a method

//how to access properties of an object 
console.log(student.name)
console.log(student["name"])


