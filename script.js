const userChoice = prompt("Please select Rock, Paper, Scissors");

function getComputerChoice() {  
    const randomChoice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    if (player === computer) {
        return `You Tie! ${player} equals ${computer}`;
    } else if (player === 'rock' && computer === 'scissors') {
        return `You Win! ${player} beats ${computer}`;
    } else if (player === 'scissors' && computer === 'paper') {
        return `You Win! ${player} beats ${computer}`;
    } else if (player === 'paper' && computer === 'rock') {
        return `You Win! ${player} beats ${computer}`;
    } else {
        return `You Lose! ${computer} beats ${player}`;
    }
}

function playGame() {
    let result = getComputerChoice();
    console.log(playRound(userChoice, result));
    console.log(playRound(userChoice, result));
    console.log(playRound(userChoice, result));
    console.log(playRound(userChoice, result));
    console.log(playRound(userChoice, result));
}

playGame();
