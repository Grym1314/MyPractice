//variables are used for storing data value

//let is used for variables where the value will change.
//const is used for variables where the value will stay constant.

//After the keyword, we need a variable name, an = sign, and a value
//keyword name = value;
//Examples
const userId = 1618033988;
let userName = "Jian-Yang";
let progress = 0.75;
let verified = true;

//For a let variable, we can change its value, or print it out:
let xp = 60;
xp = 70;

console.log(xp);        // Output: 70

//For a const variable, we can't change its value, but we can still print it:
const userID = 16180339887;
console.log(userID);    // Output: 16180339887

// Excercise 
const greetings = 'Hello good afternoon \n';
const ask = 'What is you name? \n';
let name = "Jesus";
let lastName = 'Ranmirez \n';
const askSecond = 'Do you work?';

console.log(greetings, ask,name,lastName,askSecond);