/*
Title of the file: variables.js
Description: This is a javascript file to demonstrate the usage of var, let, const and hoisting in javascript
Author: Venkata Lanka
Date: 01st January 2019
*/

/*
    1. What are the differences between let, const and var?

    ************************** var ****************************

    var is used to declare variables untill ES5 extensively and the scope of the variables declared using keyword 'var' is its current execution context.
    if the variable is declared using 'var' in a function, then the scope of that variable is that enclosing function.
    if the variable is declared using 'var' outside a function, then the scope of that variable is global.

    ***********************************************************

    ************************** let ****************************

    let is used to declare variables from ES6 and the scope of the variables declared using keyword 'let' is block specific and not function specific.
    if the variable is declared using 'let' in a function, then the scope of that variable is that enclosing function.
    if the variable is declared using 'let' in a block (if statement or while statement, etc), then the scope of that variable is that respective block specific.
    if the variable is used before it is declared using 'let' keyword, then the reference error is encountered.

    ***********************************************************

    ************************** const ****************************

    const is used to declare immutable variables from ES6 whose values cannot be changed once assigned and the scope of the variables declared using keyword 'const' is block specific and not function specific.
    if the variable is declared using 'const' in a function, then the scope of that variable is that enclosing function.
    if the variable is declared using 'const' in a block (if statement or while statement, etc), then the scope of that variable is that respective block specific.
    if the variable is used before it is declared using 'const' keyword, then the reference error is encountered.

    ***********************************************************

    2. What is hoisting in Javascript?

    Hoisting is a mechanism in Javascript in which variable and function declarations are moved to the top of their scope before
    code execution. The initialization is not moved to the top of their scope. They are initialized during the execution.

*/


// *************************************************** var examples *************************************************************

console.log("***************** var examples *********************")

var myVarName = "VarVenkat";

function showVarGlobalScopeName() {
    // myVarName variable scope is global
    console.log(myVarName);
}

// VarVenkat is displayed
showVarGlobalScopeName();


function showVarFunctionScopeName() {
    // myVarName variable scope is global
    var myVarName = "VarTrishika";
    console.log(myVarName);
}

// VarTrishika is displayed
showVarFunctionScopeName();

// VarVenkat is displayed
console.log("global scope variable myVarName is: " + myVarName);

function showVarName() {
    myVarName = "VarKanni";
    console.log("myVarName inside the function is: " + myVarName);
}

// VarKanni is displayed
showVarName();

// VarKanni is displayed as the variable is reassigned in the showVarName function (global scope as 'var' keyword is not used inside the function)
console.log("global scope myVarName is: " + myVarName);

// ******************************************************************************************************************************

// *************************************************** let examples *************************************************************

console.log("");
console.log("***************** let examples *********************")

let myLetName = "LetVenkat";

function showLetGlobalScopeName() {
    // myLetName variable scope is global
    console.log(myLetName);
}

// LetVenkat is displayed
showLetGlobalScopeName();


function showLetIfBlockScopeName() {
    if(true) {
        // myLetNameIfBlock variable scope is if block specific
        // myLetName variable scope is if block specific
        let myLetNameIfBlock = "LetTrishika";
        let myLetName = "LetTest"
        console.log("myLetName variable inside the if block is: " + myLetName);
    }
    // myLetName cannot be accessed outside the if block - Gets 'ReferenceError: myLetNameIfBlock is not defined' if we uncomment the below line
    //console.log(myLetNameIfBlock);
    console.log("myLetName value inside the function but outside the if block is: " + myLetName);
}

// LetVenkat is displayed
showLetIfBlockScopeName();

// LetVenkat is displayed
console.log("global scope variable myLetName is: " + myLetName);

// ******************************************************************************************************************************

// *************************************************** const examples *************************************************************
console.log("");
console.log("***************** const examples *********************")

const myConstName = "ConstVenkat";
const myConstTest = "Constant"

function showConstGlobalScopeName() {
    // myConstName variable scope is global
    console.log(myConstName);
}

// ConstVenkat is displayed
showConstGlobalScopeName();


function showConstIfBlockScopeName() {
    // Gets 'TypeError: Assignment to constant variable' if we uncomment the below line
    // myConstName = "ConstModified";

    if(true) {
        // myConstNameIfBlock variable scope is if block specific
        // myConstName variable scope is if block specific
        const myConstNameIfBlock = "ConstTrishika";
        const myConstName = "ConstTest"
        // Gets 'TypeError: Assignment to constant variable' if we uncomment the below line
        // myConstTest = "ModifyConstant";
        console.log("myConstName variable inside the if block is: " + myConstName);
    }
    // myConstName cannot be accessed outside the if block - Gets 'ReferenceError: myConstNameIfBlock is not defined' if we uncomment the below line
    //console.log(myConstNameIfBlock);
    console.log("myConstName value inside the function but outside the if block is: " + myConstName);
}

// ConstVenkat is displayed
showConstIfBlockScopeName();

// ConstVenkat is displayed
console.log("global scope variable myConstName is: " + myConstName);

// ******************************************************************************************************************************