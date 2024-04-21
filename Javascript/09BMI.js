//JavaScript can also perform exponentiation such as 2³ or 10².
let score = 0

score = 2 ** 2      // score is 4
score = 2 ** 3      // score is now 8
score = 2 ** 4      // score is now 16
score = 2 ** 5      // score is now 32

console.log(score)  // Output: 32

//Excersice
//Create a bmi.js program that calculates your own BMI.

function bmi(mass,height){
    return mass / (height)**2;
  }
  
  console.log(bmi(240, 7));
  
