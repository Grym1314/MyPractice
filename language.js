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
console.log("Agnes" || 'User')

//Conditional Operator- it is representing by a ?
console.log (true ? 1:2);// 1
console.log (false ? 1:2);// 2
