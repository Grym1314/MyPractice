//first example of code in Eloquent Introduction Chapter,

let total = 0, count = 1; 
while (count <=10){
    total += count;
    count += 1;
}

console.log (total);
//As the book told use or as you can see, coding itcoul be create it in different ways
// in the next lines you can see the same process but shortly and easy to compose

console.log(sum(range(1,10)));

//Chapter 1.-- Values, Types, and operators
//'Value' values in Javascript are chunks that represent pieces of information

//01/15/24-Eloquent
//Unary Operators
//typeof- produces a string value naming the type of the value you give it

console.log(typeof 4.5) //Number
console.log(typeof "X") //String

//Logical operators- supports three logical operator: and, or and not

//the && operator represent logican and.
//it is a binary operator and its result is true only if both the values given to it are TRUE
console.log (true && false) //false
console.log (true && true) //true

//The operator || detonates logical or. 
//It produces true if either of the values given to it is TRUE
console.log(false || true ) //true
console.log (false || false ) //false
// the || will return the value to its left when that can be coverted to true and will return the value on its right other wise
//Examples
console.log(null || "user"); // user
console.log("Agnes" || 'user'); // Agnes

//Conditional Operator- it is representing by a ?
console.log (true ? 1:2);// 1
console.log (false ? 1:2);// 2

//for this first chapter we used 10 console.log in total

//CHAPTER 2 Program structure

//"Let" indicates that this senteces is going to define a binding. It is followed by the name of the binding and if we want to immediately
//give it a value, by an = operator and an expresion.

let ten = 10;
console.log (ten * ten);
//Equals 100

//the value is not forever, example:
let mood = 'light';
console.log (mood);  //--> Light

mood = "Dark";
console.log (mood);  //--> Dark

//more examples
let leslieDebt = 100;
leslieDebt = leslieDebt - 10;
console.log(leslieDebt); // 90

// ',' comma can separate different definitions. Example:
let one=1, two=2;
console.log(one + two); // 3

// const and var
var nametwo = 'Jesus';
const greeting = 'Welcome to my page ';
console.log (greeting + nametwo);

//'if' If we want some code to be execited if and only if certain condition hold. 'Conditional execution'
let theNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(theNumber)){
    console.log('Your number is the square root of ' + theNumber * theNumber);
}

//'else' Else we use it in case the condition in if is not good or correct and you want to create an alternative excution path
let theNumberElse = Number(prompt('Pick a number'));
if (!Number.isNaN(theNumberElse)){
    console.log('Your number is the square root of ' + theNumberElse * theNumberElse);
}else{
    console.log('Hey,Are you stupid, why didnt you give me a number?');
}

//Also we can have more than two pathsto choose from, we can chain multiple if/else

let theNumberChain = Number(prompt('Pick a number'));
if (num < 10){
    console.log ('Small Number')
}else if (num < 100){
    console.log ('Medium Number')
}else {
    console.log ('Large Number')
}

//01/16/24
//Loops- Control flow is called a loop

let numberLoop = 0;
while (numberLoop <=12){
    console.log (numberLoop)
    numberLoop = numberLoop + 1;
} // This will repeat the console log until the condition in this case <= is respected

// other example 
let result = 1;
let counter = 0;
while (counter <= 10){
    result = result * 2;
    console.log(result);
    counter = counter + 1;
}
//console.log (result)
