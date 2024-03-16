const buttons = document.querySelectorAll('button');
const display = document.querySelector('#result');

function getComputerChoice() {  
    const randomChoice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    if (player === computer) {
        display.textContent = `You Tie! ${player} equals ${computer}`;
    } else if (player === 'rock' && computer === 'scissors') {
        display.textContent = `You Win! ${player} beats ${computer}`;
    } else if (player === 'scissors' && computer === 'paper') {
        display.textContent = `You Win! ${player} beats ${computer}`;
    } else if (player === 'paper' && computer === 'rock') {
        display.textContent = `You Win! ${player} beats ${computer}`;
    } else {
        display.textContent = `You Lose! ${computer} beats ${player}`;
    }
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        playRound(button.id, computerChoice);
    });
});
    
