// all primitive data types values are stored in stack
let username1 = "rovin@js.com"

let username2 = username1

username2 = "Castelino@js.com"

console.log(username1);
console.log(username2);
// so here username1 is stored in stack and when we assign username1 to username2 it only gets the copy the data stored, hence when
// we make changes to username2 , the value in username1 does not change, because the value given earlier was just a copy


//Non-primitive data types values are always stored in heap

let loginCreds1 = {
    email : "whatareyoulooking@wt.com",
    access : "granted"
}

let loginCreds2 = loginCreds1

loginCreds2.email = "iwillchangeit@wt.com"

console.log(loginCreds1.email);
console.log(loginCreds2.email);

//Here what happened was the variable is created in stack but the value is stored in heap, and when you assign logincreds1 to logincred2
//what happens is the reference to the actual value is given to logincred2 and not the copy, hence when you change the logincred2 after
// assigning it to logincreds1, it changes the value and email is changed in both places


