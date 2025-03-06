
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName //if you write a function without (), then it is giving the reference of functions
// sayMyName() // the moment you write () infront of fucntion, it means you are asking it to execute

function addTwoNumbers(number1, number2){
    return number1 + number2
}

console.log("Result" , addTwoNumbers(3 , 4))



function loginUserMessage(username = "sam" ){ //(username = "sam" ) this will default username to "sam" if no value is passed to username
    if(!username){ // !username is same as username === undefined, undefined is always considered as false, so !undefined makes it true always, hence if will execute
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


