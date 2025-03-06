const myObject ={
    name : "Rovin",
    work : "Developer",
    age : 28
}

// for in key will always print keys, may it be object or an array 
for (const key in myObject) {
   console.log(`${key} is the key for ${myObject[key]} value`);
   
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//maps are not iterable using for in loops and objects are not iterable using for of loop


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }