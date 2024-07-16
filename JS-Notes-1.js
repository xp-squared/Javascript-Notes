// run by using node JS-Notes-1.js

// outputting to the console
console.log("Welcome to Javascript!");
console.log("We can output text using console.log")


// declaring a variable using var
// javascript automatically infers a variable type like swift
// var can be redeclared and updated, globally scoped
// var should only be used in code written for older browsers!!!
var name = "Zane";
console.log(name);


// declaring variable using let, can be updated but not redeclared in the same scope
// Only use let if you can't use const
let age = 22;
console.log(age);

// declaring using const, cannot be updated or redeclared
// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)
const birthYear = 2002;
console.log(birthYear);


// ALWAYS DECLARE VARIABLES !!!

// consts x and y cannot change but z can change from x and y being added!
const x = 5;
const y = 22;
let z = x + y;
console.log(z);


/* 
Variables declared with let have Block Scope
Block Level Scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope
*/
