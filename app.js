const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultsDisplay = document.getElementById("results");

const possibleChoices = document.querySelectorAll("button");

let yourChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generatecomputerChoice();
    getResult();
}))

function generatecomputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1 )
    
    if ( randomNumber === 1 ) {
        computerChoice = "rock";
    }
    if ( randomNumber === 2 ) {
        computerChoice = "paper";
    }
    if ( randomNumber === 3 ) {
        computerChoice = "scissors";
    }   
    
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if ( computerChoice === yourChoice ) {
        result = "Its a Draw";
    }
    if ( computerChoice === "rock" && yourChoice === "paper" ) {
        result = "You Win!";
    }
    if ( computerChoice === "paper" && yourChoice === "scissors" ) {
        result = "You Win!";
    }
    if ( computerChoice === "scissors" && yourChoice === "rock" ) {
        result = "You Win!";
    }
    if ( computerChoice === "rock" && yourChoice === "scissors" ) {
        result = "You Lose!";
    }
    if ( computerChoice === "scissors" && yourChoice === "paper" ) {
        result = "You Lose!";
    }
    if ( computerChoice === "paper" && yourChoice === "rock" ) {
        result = "You Lose!";
    }
 
    resultsDisplay.innerHTML = result;
  
}