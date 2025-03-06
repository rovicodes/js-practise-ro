const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //this will consider dc_heros as 4th element of marvel_heros array and make changes to marvel_heros array ["thor", "Ironman", "spiderman",["superman", "flash", "batman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread, this will work like concat, but you are give more than 2 arrays to concat as well

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // this will flat the array to one array, method needs depth as parameters, so we do not know the depth, hence Infinity
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // will check if its array
console.log(Array.from("Hitesh")) // it will convert hitesh to an array
console.log(Array.from({name: "hitesh"})) // interesting // will return empty array because we din specify key to convert or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // you can give multiple params to convert to an array, output [100,200,300]

let firstname="Rovin"
let secondname ="vinold"

console.log(Array.of(firstname,secondname)); // output [ 'Rovin', 'vinold' ]