let userInput = "Rock";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const computerInput = ["rock", "scissors", "paper"];

    return computerInput[[randomNumber]];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == 'paper' && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
    } else if (playerChoice == 'scissors' && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
    } else if (playerChoice == 'rock' && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
    } else if (playerChoice == 'scissors' && computerSelection == "rock") {
        console.log("You Lose! Rock Beats Scissors");
    } else if (playerChoice == 'rock' && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerChoice == 'paper' && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
    } else {
        console.log("You Tied!");
    }
}

let computerSelection = getComputerChoice();

console.log(playRound(userInput, computerSelection));