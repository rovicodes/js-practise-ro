const name = "Rovin "
const repoCount = 50

//console.log(name + repoCount + " Value"); Never use this to dispplay string, bad coding practise rather use the below one

console.log(`My name is ${name} and i have ${repoCount} repo count`); // always use this way `` to console log a string

const gameName = new String('Rovin-Vino-Cas')// this will create a string within the object so you get access to lot of methods

const newString = gameName.substring(0, 4)

console.log(gameName);
console.log(newString);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));






