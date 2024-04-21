/*JavaScript has the following arithmetic operators:

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulo (returns the remainder)
*/

let score = 0        // Declare score and initialize it

score = 4 + 3        // score is now 7
score = 4 - 3        // score is now 1
score = 4 * 3        // score is now 12
score = 4 / 3        // score is now 1.3333
score = 4 % 3        // score is now 1

console.log(score)   // Output: 1

//Example of operation
const pizza = 2.99
const coke = 0.99

let total = pizza + coke

let tip = total * 0.2

console.log(tip)     // Output: 0.796

let tiptwo = (pizza + coke) * 0.2
//In JavaScript, parentheses have the highest order of operations.

//Create a temperature.js program that converts a temperature from Fahrenheit (°F) to Celsius (°C)
// Write code below 💖
fahrenheit = 44;
let celsius = ((fahrenheit - 32)/1.8);

console.log (celsius);