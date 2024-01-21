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
// Loop while
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

//Loop with do
let yourName;
do{
    yourName = prompt('What is your name?');
}while(!yourName);
console.log (yourName);

//LOOP for-- we can agroup all statements in one State after for, the following code is like the first LOOP WHILE example
for (let numberFor = 0; numberFor <= 12; numberFor = numberFor + 2){
    console.log(numberFor);
}

//extra example
let resultFor = 1;
for (let counterFor=0; counterFor <= 10;counterFor = counterFor = 1){
    resultFor = resultFor * 2;
}
console.log(resultFor);

//Shortcuts
for (let numberShort = 0; numberShort <= 12; numberShort += 2){
    console.log(numberShort);
}

//switch
switch (prompt('What is the weather like?')){
    case "rainy":
        console.log('Rember to bring an umbrella');
        break;
    case 'sunny':
        console.log("Protect your skin");// is important to remember that we need to but a break;
    case 'cloudy':
        console.log('Go outside');
        break;
        default://What ever the user type, will say the following console
            console.log('Unkown weather type!');
            break;
}

//EXERCISES
let numberLoopE = "0";
let counterE = 0;
while (counterE <= 6) {
  console.log(numberLoopE);
  counterE++;
  numberLoopE = numberLoopE + "0";
};

let size = 9;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

//Not Good
let chess = "# # # # ";
let chessSecond = " # # # #";
let counterChess = 0;
if ((counterChess <= 7, counterChess % 2 == 0)) {
  console.log(chess);
  counterChess++;
} else {
  console.log(chessSecond);
  counterChess++;
}

//Defining a fuction
const square = function(x) {
    return x * x;
    };
console.log(square(12));

//with the following function we can know the exponent of every number
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    };
    console.log(power(2, 10));
    // → 1024

// 010/18/2024

//closure

function multiplier (factor){
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

//When called the  function body sees the enviornment in which it was created , not the enviorament in which it is called

// 01/19/24
//Growing Fuction
function printFarmInventory (cows, chikens){
    let cowString = String (cows);
    while (cowString.length < 3){
        cowString = '0' + cowString;
    }
    console.log (`${cowString} Cows`);

    let chickenString = String(chikens);
    while (chickenString.length < 3){
        chickenString = '0' + chickenString;
    }
    console.log (`${chickenString} Chikens`);
} 
printFarmInventory (7,11);

// better way
function printZeroPaddeWithLabel (numberPadde, label){
    let numberString = String (numberPadde);
    while (numberString.length < 3){
        numberString = "0" + numberString;
    }
    console.log (`${numberString} ${label}`);
}

function printFarmInventorySecond (cows,chickens,pigs){
    printZeroPaddeWithLabel (cows,'Cows');
    printZeroPaddeWithLabel (chickens,'Chikens');
    printZeroPaddeWithLabel (pigs,'Pigs');
}

printFarmInventorySecond (7,11,3);

printFarmInventorySecond (7,11,3);

//better way or same
function zeroPad(number,width){
    let string = String (number);
    while (string.length < width){
        string = "0" + string;
    }
    return string;
}
function printFarmInventoryThree (cows, chickens, pigs){
    console.log (`${zeroPad(cows ,3)} Cows`);
    console.log (`${zeroPad(chickens ,3)} Chikens`);
    console.log (`${zeroPad(pigs ,3)} Pigs`);
}
printFarmInventoryThree (7,16,3);

//01-20-2024
//.push and .pop
let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

//tentacles and delete operator
let anObject = {left:1, right:2};
console.log (anObject.left); // 1
delete anObject.left;
console.log(anObject.left);// Undefined
console.log('left' in anObject); // false
console.log('right' in anObject); // true

//object assign
let objectA = { a:1, b:2};
Object.assign(objectA,{b:3, c:4});
console.log(objectA);

//01/21/2024
//unshift and shift
let todoList = [];
function remember(task){
    todoList.push(task);
}
function getTask (){
    return todoList.shift();
}
function rememberUrgently(task){
    todoList.unshift(task);
}

//.indexOf and .lastIndexOf

console.log ([1,2,3,2,1].indexOf(2)); // 1
console.log([1,2,3,2,1].lastIndexOf(2)); //3

//slice
console.log([0,1,2,3,4].slice(2,4));//[2,3]
console.log([0,1,2,3,4].slice(2));//[2,3,4]
//slice in acton 
function   remove (array,index){
    return array.slice(0,index)
     .concat(array.slice(index+1));
}
console.log(remove(['a','b','c','d','e'],2));//['a','b','c','d','e']
//More examples 
console.log('coconuts'.slice(0,4));//coco
console.log('coconuts'.indexOf('u')); //5

//.padstart
console.log (String(6).padStart(3,"0")); //006

//Destructuring
let {name} = {name: 'Faraji', age: 23};
console.log(name);//Faraji

//Call console many times
//doing something N times
function repeatLog(n){
    for (let i=0; i<n;i++){
        console.log(i);
    }
}

//doing something
function repeatDoing(nDoing, action){
    for (let ii = 0; ii < nDoing; ii++){
        action (ii);
    }
}
repeatDoing (3,console.log);
