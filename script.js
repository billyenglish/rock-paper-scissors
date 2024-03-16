let userInput = "Rock";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const computerInput = ["Rock", "Scissors", "Paper"];

    return computerInput[[randomNumber]];
}

function playRound(playerSelection, computerSelection) {
    
}

console.log(getComputerChoice());
console.log(userInput.toLowerCase() == 'rock' && getComputerChoice() == "rock");