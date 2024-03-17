/* Game Logic for Rock, Paper, Scissors. */

let userChoice = prompt("Please select Rock, Paper, or Scissors");

function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    if (player === computer) {
        console.log(`YOU TIED! ${player} equals ${computer}`);
    } else if (player === "rock" && computer === "scissors") {
        console.log(`YOU WON! ${player} beats ${computer}`);
    } else if (player === "paper" && computer === "rock") {
        console.log(`YOU WON! ${player} beats ${computer}`);
    } else if (player === "scissors" && computer === "paper") {
        console.log(`YOU WON! ${player} beats ${computer}`);
    } else {
        console.log(`YOU LOSE! ${computer} beats ${player}`)
    }
}

function playGame() {
    let result = getComputerChoice();
    console.log(playRound(userChoice, result)); 
}

playGame();

