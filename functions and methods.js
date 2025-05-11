function myfunction() {
    console.log("Hello, World!");
}
// arrow function

const add = (a, b)=> {
    return a + b;
}

(a, b) => a + b;

// callback is function that is passed as an arguument to another funct ion 
// for example for each method in array is a callback function 

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});
// for each method takes a callback function as an argument and applies it to each element in the array

// higher order functions are functions that take another functions as a variable 

//question 
let a = [1, 2,3]
a.forEach((num) =>{
    console.log(nums* nums)
})
const b = a.map((val)=>{
    val* val
}) // used to create new arr
console.log(b)

// lot of methods for array like reduce,  filter e.t.c
