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

function getHumanChoice(){
    return prompt("What do you choose? Rock, Paper or scissors?").toLowerCase()
    
}


function playRound(){
    let humanChoice = getHumanChoice();
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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound();
        if (result == "human"){
            humanScore++;
            console.log("You win this round!");
        } else if(result == "computer"){
            computerScore++;
            console.log("The computer wins this round!");
        } else {
            console.log("It's a draw!");
        }
    }
    if (humanScore > computerScore){
        console.log("You win the game");
    } else{
        console.log("The computer wins the game!");
    }
}

playGame();