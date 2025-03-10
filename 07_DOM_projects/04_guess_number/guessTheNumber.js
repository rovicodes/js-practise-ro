let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

//let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (eventObj) {
    eventObj.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    display("please enter a valid number");
  } else if (guess <= 0 || guess > 100) {
    display("please enter a number within 1-100");
  } else {
    if (numGuess === 11) {
      display("Sorry, Attempts are over")
       endGame()

    } else {
    //  prevGuess.push(guess);
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function display(message) {
  lowOrHi.innerHTML = message;
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    display("Congratulations, you won");
  } else {
    display("sorry! wrong guess");
  }
}

function displayGuess(guess) {
  guessSlot.innerHTML += `${guess} `;
  userInput.value = "";
  numGuess++;
  remaining.innerHTML = 11 - numGuess
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add("restartButton")
    p.innerHTML = '<h2 style="color: red;" class= "newGame">Restart?</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame()
{
    const newGameBtn = document.querySelector('.newGame')
    newGameBtn.addEventListener("click", function(eventObj){
    numGuess = 0
     randomNumber = parseInt(Math.random() * 100 + 1);
     guessSlot.innerHTML = ''
     remaining.innerHTML = 10
     userInput.removeAttribute('disabled')
     submit.removeAttribute('disabled')
     startOver.removeChild(p)
     display('')
     playGame = true             
    })
       
}
