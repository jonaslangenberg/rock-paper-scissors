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
}


// window.addEventListener("load", () => {
//     const playerScoreWhenLoading = document.querySelector("#player-score");
//     const computerScoreWhenLoading = document.querySelector("#computer-score");
//     playerScoreWhenLoading.textContent = "0".toString();
//     computerScoreWhenLoading.textContent = "0".toString();
// });


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sciBtn = document.querySelector("#scissors");

let globalPlayerScore = 0;
let globalComputerScore = 0;


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
        
    } else if (globalComputerScore === 5){
        alert("The computer won!");
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        globalComputerScore = 0;
        globalPlayerScore = 0;
        
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





// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i < 5; i++){
//         let result = playRound();
//         if (result == "human"){
//             humanScore++;
//             console.log("You win this round!");
//         } else if(result == "computer"){
//             computerScore++;
//             console.log("The computer wins this round!");
//         } else {
//             console.log("It's a draw!");
//         }
//     }
//     if (humanScore > computerScore){
//         console.log("You win the game");
//     } else{
//         console.log("The computer wins the game!");
//     }
// }
