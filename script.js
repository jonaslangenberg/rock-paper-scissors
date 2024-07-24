/*
- getComputerChoice should calculate a random Number between 0 and 98, so that there are exactly 99 CSSFontFeatureValuesRule
- then the function should evaluate 66 - 98 = rock
- 33 - 65 = scissors
- 0 - 32 = paper
- create getHumanChoice
- prompt user and ask for a choice, make is case insensitive
- validate choice, throw error message if answer is not one of the choices
- initialize the humanScore and the computerScore variables, maybe also use them as parameters in a function that compares the choices
- create function playRound
- let playRound log the rounds winner and the score to the console
- create function playGame, that plays the game 5 rounds and also evaluates the overall winner
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100 - 1);
    if (randomNumber < 0) {
        randomNumber = 0;
    }

    if(randomNumber >= 66){
        return "rock";
    } else if(randomNumber >= 33){
        return "scissors";
    } else {
        return "paper";
    }
}

// function getHumanChoice(){
//     return prompt("What do you choose? Rock, Paper or scissors?").toLowerCase()
    
// }


function playRound(humanChoice){
    // let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice){
        return "draw";
    }
    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("Rock beats Scissors!");
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("Paper beats Rock!");
        return "human";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors beats Paper!");
        return "human";
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log("Rock beats Scissors!");
        return "computer";
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log("Paper beats Rock!");
        return "computer";
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("Scissors beats Paper!");
        return "computer";
    }



const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sciBtn = document.querySelector("#scissors");

let globalPlayerScore = 0;
let globalComputerScore = 0;


sciBtn.addEventListener("click", () => {
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    const resultRound = document.querySelector("#round-result");
    if (globalPlayerScore === 5){
        alert("You won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        resultRound.textContent = "-"
        
    } else if (globalComputerScore === 5){
        alert("The computer won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        resultRound.textContent = "-"
        
    } else {
        let winner = playRound("scissors");
    if (winner == "human"){
        globalPlayerScore++;
        playerScore.textContent = globalPlayerScore.toString();
        resultRound.textContent = "You won this round!"
    } else if(winner == "computer"){
        globalComputerScore++;
        computerScore.textContent = globalComputerScore.toString();
        resultRound.textContent = "The computer won this round!"
    } else {
        resultRound.textContent = "It's a draw";
    } 
    }
      
} );

paperBtn.addEventListener("click", () => {
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    const resultRound = document.querySelector("#round-result");
    if (globalPlayerScore === 5){
        alert("You won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        resultRound.textContent = "-"
        
    } else if (globalComputerScore === 5){
        alert("The computer won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        resultRound.textContent = "-"
        
    } else {
        let winner = playRound("paper");
    if (winner == "human"){
        globalPlayerScore++;
        playerScore.textContent = globalPlayerScore.toString();
        resultRound.textContent = "You won this round!"
    } else if(winner == "computer"){
        globalComputerScore++;
        computerScore.textContent = globalComputerScore.toString();
        resultRound.textContent = "The computer won this round!"
    } else {
        resultRound.textContent = "It's a draw";
    } 
    }
      
} );

rockBtn.addEventListener("click", () => {
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    const resultRound = document.querySelector("#round-result");
    if (globalPlayerScore === 5){
        alert("You won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        resultRound.textContent = "-"
        
    } else if (globalComputerScore === 5){
        alert("The computer won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        resultRound.textContent = "-"
        
    } else {
        let winner = playRound("rock");
    if (winner == "human"){
        globalPlayerScore++;
        playerScore.textContent = globalPlayerScore.toString();
        resultRound.textContent = "You won this round!"
    } else if(winner == "computer"){
        globalComputerScore++;
        computerScore.textContent = globalComputerScore.toString();
        resultRound.textContent = "The computer won this round!"
    } else {
        resultRound.textContent = "It's a draw";
    } 
    }
      
} );


