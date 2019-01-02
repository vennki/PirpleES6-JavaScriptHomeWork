/*
Title of the file: StatementsAndOperators.js
Description: This is a javascript file to demonstrate the usage if statements and operators in javascript
Author: Venkata Lanka
Date: 02nd January 2019

All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

*/

// All members of this collection are mortal
const men = ["Man1", "Man2", "Man3", "socrates", "Man5"];

// placeholder to check if Socrates is part of the mortal men collection
const checkMan = "Socrates";

// Flag which indicates that men are mortal 
const isMenMortal = true;

// Flag which indicates that Socrates is a man
const isSocratesMan = true;


if(isMenMortal && isSocratesMan) {
    console.log("All men are mortal");
    console.log("Socrates is a man.");
    if(men.includes(checkMan.toLowerCase())) {
        console.log("Therefore, socrates is mortal.");
    }
}

/*
    This cake is either vanilla or chocolate.
    This cake is not chocolate.
    Therefore, this cake is vanilla.
*/

const cake = "vanilla";

console.log("");
console.log("");

if(cake === "chocolate" || cake === "vanilla") {
    console.log("This cake is either vanilla or chocolate.");
    if(cake !== "chocolate") {
        console.log("This cake is not chocolate.");
        console.log("Therefore, this case is vanilla.");
    } else {
        console.log("This cake is chocolate.");
    }
}