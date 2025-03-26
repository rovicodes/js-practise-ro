const user = {
    username: "Rovin",
    login : 8,
    getUserVal : function(){
        return this.username
    }
}

console.log(user.getUserVal())

//constructors

function User(username, isLoggedin, loginNum){
    this.username = username
    this.isLoggedin =  isLoggedin
    this.loginNum = loginNum
    this.greeting = function (){
        console.log(`welcome ${this.username}`)
    }
    //return this // need not write return explicitly, it is implicit
}

const userOne = new User("Rovin",true,10 )
// console.log(userOne.username);

const userTwo = new User("Lizzia",true,10 )
console.log(userOne)
console.log(userTwo)
console.log(userTwo.greeting);

