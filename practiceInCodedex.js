// This is the URL if you want to learn by games https://www.codedex.io/javascript

//Codedex
//Let & Const

//First practice
const greetings = 'Hello good afternoon';
const ask = 'What is you name?';
let name = "Jesus";
let lastName = 'Ranmirez';
const askSecond = 'Do you work?';

console.log(greetings, ask,name,lastName,askSecond);

// 19/01/24
//Types of data
//Numbers, Strings, Boolean, Null and Undefined

fahrenheit = 44;
let celsius = ((fahrenheit - 32)/1.8);
console.log (celsius);

// Exponents. Since exponentiation is super similar to multiplication, JavaScript uses the notation **.
let score = 0
score = 2 ** 2      // score is 4
score = 2 ** 3      // score is now 8
score = 2 ** 4      // score is now 16
score = 2 ** 5      // score is now 32
console.log(score)  // Output: 32

function bmi(mass,height){
    return mass / height ** 2;
}

console.log(bmi(287,6.5))

//Currency Project
const yuan=560;
const yen=2455;
const won=3280;
let yuanDollar= 0.14 * yuan;
let yenDollar= 0.0068 * yen;
let wonDollar = 0.00075 * won;
const usd = yuanDollar + yenDollar + wonDollar;
console.log('You have in USD currency ' + usd + "usd");

// Conditional Statement
//Coin.js
let coin = Math.random();

if (coin > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

//IF statement-which tests a condition for truth and executes the code if it is true
//if (condition) {
  // Do something
//}

//Grades
let grade = 70;
if (grade > 60) {
  console.log("You passed!");
}
//The if keyword is followed by a condition, grade > 60, inside a set of parentheses ( ).
//If the condition is true, the code inside the curly braces { } executes.
//If the condition is false, the code inside the curly braces is skipped.

//Else clause
/*
if (condition) {
    // Do something
  } else {
    // Do something else 
  }
*/

//Ejercicio
let hour= 10
if (hour < 12){
  console.log('Buenos dias \nHaz ejercicio y desayuna bien');
}else{
  console.log('Buenas tardes \nHaz ejercicio y come bien');
};  

//01/22/2024
//else if
let ph = 4;

if (ph > 7) {
  console.log("basic");
} else if (ph < 7) {
  console.log("Acid");
} else {
  console.log("NEUTRAL");
}

// Math.random() method returns a random decimal number between 0 and 1.
//Math.floor() hen rounding it down to the nearest integer
console.log (Math.floor(Math.random() * 10));

// Magic ball 8
let random = Math.floor(Math.random() * 10);
if (random == 0){
  console.log('Ariel se la come completa?');
  console.log('Yes - definitely.');
}else if (random == 1) {
  console.log('Ariel se la come completa?');
  console.log('It is decidedly so');
}else if (random == 2 ) {
  console.log('Ariel se la come completa?');
  console.log('Without a doubt');
}else if (random == 3) {
  console.log('Ariel se la come completa?');
  console.log('Reply hazy, try again.');
}else if (random == 4) {
  console.log('Ariel se la come completa?');
  console.log('Ask again later.');
}else if (random == 5) {
  console.log('Ariel se la come completa?');
  console.log('Better not tell you now.');
}else if (random == 6) {
  console.log('Ariel se la come completa?');
  console.log('My sources say no.');
}else if (random == 7) {
  console.log('Ariel se la come completa?');
  console.log('Outlook not so good.');
}else{
  console.log('Ariel se la come completa?');
  console.log('Very doubtful.');
}
//01/24/2024
//Comparison operators compare two values: ===, !==, >, >=, <, <=.
/*Logical operators, also known as Boolean operators, combine and evaluate two conditions. They are &&, ||, and ! operators:

The AND logical operator && returns true if both conditions are true, and returns false otherwise.
The OR logical operator || returns true if at least one of the conditions is true, and false otherwise.
The NOT logical operator ! returns true if the condition is false, and vice versa.
*/
//Air quality
let aqi= 300;
if (aqi > 0 && aqi < 50){
  console.log ('Good');
} else if (aqi > 51 && aqi < 100){
  console.log ('Moderate');
}else if (aqi > 101 && aqi < 151){
  console.log ('Unhealthy (Sensitive Groups)');
}else if (aqi > 152 && aqi < 201){
  console.log ('Unhealthy');
}else if (aqi > 202 && aqi < 301){
  console.log ('Very Unhealthy');
}else{
  console.log ('Hazardous');
}

//

let gamer = 3;
let randomm=(Math.floor(Math.random() * 3) + 1);
if (randomm == 3 & gamer == 1) {
  console.log("Player picked:      Scissors");
  console.log("Computer picked:      Rock");
  console.log("The computer won!");
} else if (randomm == 1 && gamer == 2) {
  console.log("Player picked:      Paper");
  console.log("Computer picked:      Scissors");
  console.log("The computer won!");
}  else if (randomm == 2 && gamer == 3) {
  console.log("Player picked:      Rock");
  console.log("Computer picked:      Paper");
  console.log("The computer won!");
} else {
  console.log("TIE");
}