///////////////
// BACKSTORY //
///////////////
// You're an android in an unforgiving world where humans rule.
// Your decisions now will affect the world later.
// What choices will you make?
// This is totally NOT a rip off from a popular 2018 game.

///////////////////////////////
// BASIC "IF/ELSE" STATEMENT //
///////////////////////////////
// Create a variable "username" and set it equal to the user's
// first command line argument when calling 'node conditional.js'
const username = process.argv[2];
console.log(username);

// If "username" is defined, console.log(`Hello, ${username}`)
// Otherwise, console.log("You must provide a username");
// HINT: you can check if a variable is defined by using it
// as a condition. Ex. if(someVariable){...}
console.log(`Hello, ${username}`)

// Test to make sure the script is working as intended. Save this file
// and in the command line execute 'node conditional.js'
// Then try 'node conditional.js Marcus'

/////////////////////////////////
// "IF/ELSE IF/ELSE" STATEMENT //
/////////////////////////////////

// Create a variable "health" and set it equal to 100
// Create a variable "money" and set it equal to 100
let health = 100;
let money = 100;


// Create a variable "item" and set it equal to the user's second command
// line argument

let item= process.argv[3];
console.log(item);

if(item== "jacket"){
    money=money-40
    health=health+20
    console.log("You bought a jacket");
}
else if(item== "candy"){
    money=money-10
    console.log("You bought a candy");
}
else if(item== "paint"){
    money=money-30
    console.log("You bought a paint");
}
else if(item== "hammer"){
    money=money-70 
    console.log("You bought a hammer");
}

else console.log("You bought nothing")

// If "item" is "jacket", subtract 40 from "money" and add 20 to "health" and console.log("You bought a jacket");
// else if "item" is "candy", subtract 10 from "money" and console.log("You bought candy");
// else if "item" is "paint", subtract 30 from "money" and console.log("You bought paint");
// else if "item" is "hammer", subtract 70 from "money" and console.log("You bought a hammer");
// else console.log "You bought nothing"

// console.log(`You have ${money} dollars left.`);

console.log(`You have ${money} dollars left.`);
console.log(`You have ${health} health.`)


// Test to make sure the script is working as intended.

///////////////////////
// BOOLEAN OPERATORS //
///////////////////////
console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");

//This is called A ternary operator! It's a shorthand if/else statement.
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 
// The syntax of it is:
// condition ? expressionIfTrue : expressionIfFalse;
// All that's being done is we're just setting the variable randomPerson equal to the outcome of that ternary statement, in this case what is the condition being tested?

// You're given a variable "randomPerson" that is a string
// NOTE: 
// We'll discuss Math.random() later this week!
// If you're interested to know more about ternary operators, google "JS ternary operator"! (Not now though, it's project time! :D)

// Create a variable "choice" and set it equal to the user's third
// command line argument

// If "choice" is NOT defined (recall how we did this with the "username" variable)
//      - console.log("You shut down due to inactivity and get robbed of all your money");
//      - reduce "money" to 0

// Else if "choice" is NOT "run" AND "randomPerson" is "Felipe" 
//      console.log("The protesters attack you...");
//      - if "item" is NOT "jacket"
//          - console.log("...but Felipe, a fellow android shows up to help you escape them");
//      - else
//          - console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
//          - reduce "health" by 50

// Else if "choice" is "run" AND "randomPerson" is "John" 
//      - console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
//      - if "item" is "hammer" OR "jacket"
//          - console.log("...and holds you for questioning for suspicious activity");
//          - reduce "money" to 0
//      - else