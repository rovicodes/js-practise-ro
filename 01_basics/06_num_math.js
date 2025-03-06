const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);// this will return object of number

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // this will display decimal number, you can display like 100.0 or 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // this will help you round of numbers, like here it will round of to precision 4

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //this will add like 10,00,000 like to indian standards

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // math is a library of object type
console.log(Math.abs(-4)); //this will remove the - sign, basically turn the negative number to positive
console.log(Math.round(4.6)); // this will round of the number
console.log(Math.ceil(4.2));// this will round of the higher number, like 4.2 will be 5
console.log(Math.floor(4.9));// this will round of to lower number, like 4.9 will be 4
console.log(Math.min(4, 3, 6, 8));//will return min number
console.log(Math.max(4, 3, 6, 8));// will return the max number

console.log(Math.random()); // this will give random number between 0-1 like 0.1112343 or 0.9343435
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);
 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)