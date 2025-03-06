const username = "vinold"

const objForThis = {
    username : "rovin",
    price : 999,
    userMessage : function () {
           console.log(`Welcome Mr.${this.username}`)
    }

}

//objForThis.userMessage()
//console.log(username)

function toPractiseThis() {
    const nameOfUser = "Rovin"
    console.log(this) // if you use this in normal function, it basically returns some global methods and var etc
    console.log(`Inside toPractiseThis ${this.nameOfUser}`)
}

//toPractiseThis() // basically this keyword will work inside the scope of the object : as per my knowledge now

const methodUsingVarName = function() {
    const nameOfUser = "Rovin"
    console.log(`Inside methodUsingVarName ${this.nameOfUser}`)
}

//methodUsingVarName()

const methodUsingArrowFunc = () => {
    const nameOfUser = "Rovin"
    console.log(this) // if you use this in arrow function then it will return empty object
    console.log(`Inside methodUsingArrowFunc ${this.nameOfUser}`)
}

//methodUsingArrowFunc() //this keyword wont work inside the scope of the function

const addNumbersExplicitReturn = (num1 , num2) => {
    return num1+num2 // this is explicit return because we are mentioning return keyword explicilty
}

//console.log(`addition using addNumbersExplicitReturn ${addNumbersExplicitReturn(2,3)}`)

const addNumbersImplicitreturn =(num1,num2) => (
    {username : "Rovin"}
) // in arrow functions, if you use () for functions rather than {} then return keyword will be used implicitly

//console.log(`addition using addNumbersImplicitreturn ${addNumbersImplicitreturn(2,3)}`)

console.log(`addition using addNumbersImplicitreturn ${addNumbersImplicitreturn(2,3)}`)


