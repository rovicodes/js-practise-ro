function UserDetails(username, score){
        this.username =  username
        this.score =  score  
}

UserDetails.prototype.increment = function(){
    this.score++
}

const user1 = new UserDetails("Ro",10)

console.log(user1);

user1.increment()
console.log(user1);
