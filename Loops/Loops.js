/*
    Title of the file: Loops.js
    Description: This is a javascript file to demonstrate the usage of Loops in javascript
    Author: Venkata Lanka
    Date: 12th January 2019
*/

/* for loop is used to print -
  prime - if a number is prime
  Fizz - if a number is divisible by 3
  Buzz - if a number is divisible by 5
  FizzBuzz - if a number is divisible by both 3 and 5
*/
for(let i = 1 ; i <= 100; i++){
  if(isPrime(i)){
    console.log("prime");
  } else if((i % 3 === 0) && (i % 5 ===0)){
    console.log("FizzBuzz");
  } else if(i % 3 === 0){
    console.log("Fizz");
  } else if(i % 5 === 0){
    console.log("Buzz")
  } else{
    console.log(i);
  }
  
}

// Function to check if a number is prime or not
function isPrime(num) {
  for(let j = 2; j <= Math.sqrt(num); j++){
    if(num % j === 0){
      return false;
    }
   }
  return num !== 1 && num !== 0;
}
