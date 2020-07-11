// Primitive Data types
// Store directly in the location the variable access, stored on stack

// Reference Data tpyes
// Accessed by reference
// Object that are stored on the heap - a pointed to a location on memory

//Primitive Data Types

//String
const name = "M S Dhoni";
console.log(typeof name);
//Number - intergers, decimals, float etc etc included
//Boolean
const hasKids = true;
//Null
const car = null;
console.log(typeof car); //returns object, bug in JS. null is not an object
//Undefined
let test;
console.log(typeof test);
//Symbols (ES6)
const symbol = Symbol();

// Reference Data Types - i.e. all are objects

//Arrays
const hobbies = ["movies", "music"];
console.log(typeof hobbies); //returns object
//Object Literals
const address = {
  city: "Bangalore",
  pin: "560043"
};
console.log(typeof address); //returns object
//Functions
//Dates
const today = new Date();
console.log(today);
console.log(typeof today);

// Since JS is dynamically typed - types are associated with values not variables (in JAAVA types are associated with variables)
// Same variable can hold multiple types
// Super sets of JS that allow static typing - example TypeScript, Flow JS
