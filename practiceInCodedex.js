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