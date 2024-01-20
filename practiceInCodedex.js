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