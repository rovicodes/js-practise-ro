// data types are divided into 2 categories Primitive and Non primitive 

//  Primitive are call by value data types

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Datatype is number
const scoreValue = 100.3 // Datatype is number



// DataType = DT shortform

const isLoggedIn = false // DT is boolean
const outsideTemp = null // it is special that null value DT is object
let userEmail;

const id = Symbol('123') // DT is symbol
const anotherId = Symbol('123')

//console.log(id === anotherId); // every symbol is unique hence the === will return false

const bigNumber = 3456543576654356754n // DT is bigint



// Reference (Non primitive)

// Array, Objects, Functions // all the non primivite types DT are object and for functions its object function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3