// array is of type object
//one array can have same type or different type elements
//arrays make shallow copies, that is it share the same reference, so if it is changed at one place it will change everywhere like
//non primitive elements

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // this will add 6 to myArr at the end
// myArr.push(7) //this will add 6 to myArr at the end
// myArr.pop() // this will remove the last element from the array, ex it will remove 7 because we added 7 at the end

// myArr.unshift(9) // this will add 9 at the begining of the array hence all the rest of the values will shift to next position, hence adding load on system
// myArr.shift() // will remove the first element of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // it will convert array into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // here only [1,2] will be printed, because it doesnt consider the range, so 3 will be omitted

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // here [1,2,3] will be printed, it considers range value as well
console.log("C ", myArr); //[]
console.log(myn2);

//major difference betwenn slice and splice is that, slice will not change the original array and splice will change the original array
