/*
Title of the file: Functions.js
Description: This is a javascript file to demonstrate the usage of Functions in javascript
Author: Venkata Lanka
Date: 04th January 2019
*/

/*
    Let's go back to your syllogism (logical argument) examples from Homework #3. 
    Now it's time to turn those loose bits of logic into functions. 
    Rather than having procedure that demonstrates that Socrates is mortal, 
    you should create a function that accepts a name and returns a boolean (True or False) 
    representing whether that name identifies a man who is mortal or not. Your function to gracefully 
    handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) 
    without throwing an exception.

*/

function checkIfMortal(nameToCheck) {
    const mortalMen = ["Man1", "Man2", "Man3", "Man4", "Socrates", "Man6", "Man7", "Man8", "Man9", "Man10"];
    if (isNaN(nameToCheck) && mortalMen.filter(men => men.toLowerCase() === nameToCheck.toString().toLowerCase()).length !== 0) {
        return true;
    } else {
        return false;
    }
}

// returns true since Socrates is included in the mortalMen list
console.log(checkIfMortal("Socrates"));

// returns false since "10" is not included in the mortalMen list
console.log(checkIfMortal("10"));

// returns false since 10 is a number not included in the mortalMen list
console.log(checkIfMortal(10));

// returns true since Man10 is included in the mortalMen list
console.log(checkIfMortal("Man10"));

// returns false since Man11 is not included in the mortalMen list
console.log(checkIfMortal("Man11"));


/*

If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.

*/

console.log("");
console.log("");

const cakeType = ["chocolate", "vanilla"];
const isItChocolate = true;

function getCakeFlavor(cakeFlavor, isChocolate) {
 if(isChocolate === true){
     return "Chocolate";
 } else if(isChocolate === false) {
     return "Vanilla";
 } else {
     return "The cake is neither chocolate nor vanilla flavored.";
 }
}

console.log(getCakeFlavor(cakeType, isItChocolate));