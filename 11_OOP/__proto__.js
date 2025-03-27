// proto inhertiance

const User = {
    name : "Rovin",
    email : "Rov@google.com"
}

const Developer = {
    isDeveloper : true,
    __proto__ : User
}

const Human = {
    isHuman : true
}

//Human.__proto__ = User

//console.log(Developer.name);

//console.log(Human.email)

//modern syntax

Object.setPrototypeOf(Human , User)

console.log(Human.name);

