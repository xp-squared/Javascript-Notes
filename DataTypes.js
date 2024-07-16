// run by using node DataTypes.js

/*
JavaScript has 8 Datatypes

String : You can use single or double quotes, you can use quotes inside a string as long as they dont match the outside quotes
Number : all numbers are floating point, can be written with or without decimals
Bigint : new datatype that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
Boolean : true or false
Undefined
Null
Symbol
Object: written with curly braces {}, properties are seperated by commas

(TYPES ARE DYNAMIC!)

Arrays: use these brackets [], commas seperate each entry of array, 0 index based
typeof operator returns datatype

*/

// Numbers:
let height = 5;
let weight = 500;

// Strings:
let name = "Zane";
let car = "Peugot";

// Bools
let x = true;
let y = false;


/*
The Object Datatype

The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:

objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
*/

// Object
const person = {firstName: "Jackie", lastName: "Moon", age: 35 };

// Array Object
const cars = ["Ford", "Chevy", "Chrysler"];

// Date object:
const date = new Date("7-16-2024");

console.log(date)

// if you add an number and a string together, JS will treat the output as a string

// dataTypes in JS are dynamic as you can see with this example
let z;
z = 15;
console.log(z);
z = "Domonique";
console.log(z + "\n");

// exponential notation example
let a = 123e5; 
console.log(a);

console.log(typeof a); // shows what type a is, which is a number

// if we just have this we have an undefined variable
let j;
// any variable can also be emptied by setting it to undefined
j = 22;
j = undefined;
console.log(j);