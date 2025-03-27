//code 1
function Name(username){
    this.username =  username
}

Name.prototype.trueLength = function(){
    this.username = this.username.trim()
}

const myName = new Name("hello")

myName.trueLength()

console.log(myName.username.length);

//code 2

const UserDetails = {
    username : "Rovin "
}

Object.prototype.trueLength = function(){
    this.username = this.username.trim()
}

UserDetails.trueLength()

console.log(UserDetails.username.length);

//code 3 

function proEx(username)
{
   return username
}

Function.prototype.printprEx = function(){
    console.log("hello pproex")
}

proEx.printprEx();

//code 4

let myHeros = ["thor", "spiderman"]


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.heyHitesh();

//code 5

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
} 

heroPower.hitesh();


