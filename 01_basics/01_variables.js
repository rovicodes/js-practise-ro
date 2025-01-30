const accoountId = 1234
let accountName = "Rovin"
var accountEmail = "rovin@gmail.com" // Never use var because JS cannot identify the scope so always use let or const
accountCity ="Bengaluru" // never define variable like this
let accountState

accountCity = "Udupi"

console.table([accoountId, accountName, accountEmail, accountCity, accountState])

