const gameDisplay = document.querySelector("#game-display");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const gameButtons = document.querySelectorAll("#game-controls button");
const resetDisplay = document.querySelector(".game-result");
const resetButton = document.querySelector("#reset");
const gameWinner = document.querySelector("#game-winner");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function winScenario(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

function playRound(playerSelection, computerSelection) {

    const result = winScenario(playerSelection, computerSelection);

    if (result === "It's a tie!") {
        gameDisplay.innerHTML = `<p>It's a tie! Both selected ${playerSelection}</p>`;
    } else if (result === "Player Wins!") {
        gameDisplay.innerHTML = `<p>Player Wins! <span>${playerSelection}</span> beats <span>${computerSelection}</span></p>`;
    } else {
        gameDisplay.innerHTML = `<p>Computer Wins! <span>${computerSelection}</span> beats <span>${playerSelection}</span></p>`;
    }
}

function playGame(playerSelection, computerSelection) {

    const gameResult = winScenario(playerSelection, computerSelection);

    if (gameResult === "Player Wins!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (gameResult === "Computer Wins!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            gameDisplay.innerHTML = `<p>Player Wins the Game</p>`;
            gameWinner.innerHTML = "Player Wins!";
            resetGame();
        } else if (computerScore === 5) {
            gameDisplay.innerHTML = `<p>Computer Wins the Game</p>`;
            gameWinner.innerHTML = "Computer Wins!";
            resetGame();
        }
        gameButtons.forEach((button) => {
            button.disabled = true;
        });
        resetDisplay.style.visibility = "visible";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    gameDisplay.innerHTML = "Let's Play!";
    resetDisplay.style.visibility = "hidden";
    gameButtons.forEach((button) => {
        button.disabled = false;
    });
}

resetButton.addEventListener("click", resetGame);

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.dataset.choice;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        playGame(playerSelection, computerSelection);
    });
});