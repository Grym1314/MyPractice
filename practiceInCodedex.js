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
//MAPS
let ages = {
  Boris : 39,
  Liang : 76,
  Jury : 62
};
console.log(`Jury is ${ages['Jury']}`); // Jury is 62
console.log ('Is Jacks age known?', 'Jack' in ages); //Is Jack's age knows? false
console.log('Is toString age know?','toString' in ages);// Is toString age know? true
console.log('toString' in Object.create(null)); // False

// Noas it stores a mapping and allows any type of keys
let age = new Map();
age.set('Boris', 39);
age.set('Liang', 22);
age.set('Julia', 62);

console.log(`Julia is ${age.get('Julia')}`); // Julia is 62
console.log('Is Jacks age know?', age.has('Jack')); //Is jacks age know? False
console.log(age.has('toString')); // False