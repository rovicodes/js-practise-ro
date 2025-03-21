//promise 1
const promiseOne = new Promise(function (resolve, reject) {
  //add an async call
  setTimeout(function () {
    console.log("you are inside promise one");
    resolve();
  }, 1000);
});

//promise 2
promiseOne.then(function () {
  console.log("you are inside then");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise consumed");
});

//promise 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var userInfor = { name: "Rovin", email: "rvincas@gmail.com" };
    resolve(userInfor);
  }, 1000);
});

promiseThree.then(function (userInfo) {
  console.log(userInfo.name);
});

//promise 4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;

    if (!error) {
      resolve({ username: "Rovin p4", password: "pwd" });
    } else {
      reject("promise 4 some error");
    }
  }, 1000);
});

promiseFour
  .then(function (userInf) {
    console.log(`first then ${userInf.username}`)
    return userInf;
  })
  .then(function (userinfo) {
    console.log(`promsie 4 name : ${userinfo.username}`);
  })
  .catch(function (err) {
    console.log(err);
  }).finally(()=>console.log("finally executed"))

  //promise 5

  const promiseFive = new Promise(function(resolve,reject){
     
    setTimeout(() => {       
       let error = true
       if(!error)
       {
           resolve({username : "Javascript", password : "JS@123"})
       }
       else{
           reject('Error : JS went wrong')
       }
    }, 1000);
})

async function consumePromiseFive() {  
      try {
       const response =  await promiseFive
       console.log(response)
      } catch (error) {
       console.log(error);        
      }
}

consumePromiseFive()
