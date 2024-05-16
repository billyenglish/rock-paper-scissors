const gameResult = document.querySelector('#game-result');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const gameButtons = document.querySelectorAll('button');
const resetDisplay = document.querySelector(".reset-game");
const resetButton = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = ["rock", "paper", "scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function determineWinner(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return "Player Wins!";
    } else {
        return "Computer Wins!"
    }
}

function playRound(playerSelection, computerSelection) {

    const winner = determineWinner(playerSelection, computerSelection);

    if (winner === "It's a tie!") {
        gameResult.innerHTML = `<p>It's a tie! <span class="selection">${playerSelection}</span> ties <span class="selection">${computerSelection}</span></span></p>`
        gameResult.style.color = "white";
    }

    if (winner === "Player Wins!") {
        gameResult.innerHTML = `<p>Player Wins! <span class="selection">${playerSelection}
        </span> beats <span class="selection">${computerSelection}</span></p>`
        gameResult.style.color = "white";
    }

    if (winner === "Computer Wins!") {
        gameResult.innerHTML = `<p>Computer Wins! <span class="selection">${computerSelection}
        </span> beats <span class="selection">${playerSelection}</span></p>`
        gameResult.style.color = "white";
    }
}

function playGame(playerSelection, computerSelection) {

    const gameResults = determineWinner(playerSelection, computerSelection);

    if (gameResults === "Player Wins!") {
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
        playerScoreDisplay.style.color = "white";
    }

    if (gameResults === "Computer Wins!") {
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
        computerScoreDisplay.style.color = "white";
    }

    if (playerScore === 5 || computerScore === 5) {
        gameButtons.forEach((button) => {
            if (button !== reset) {
                button.disabled = true;
            }
        });

        if (computerScore === 5) {
            gameResult.innerHTML = `<p>Game Over. Computer Wins ${playerScore} - ${computerScore}</p>`;
        } else {
            gameResult.innerHTML = `<p>Game Over. Computer Wins ${playerScore} - ${computerScore}</p>`;
        }
        resetDisplay.style.display = "block";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerHTML = 0;
    computerScoreDisplay.innerHTML = 0;
    gameResult.innerHTML = "";
    gameButtons.forEach((button) => {
        button.disabled = false;
    });
    resetDisplay.style.display = "none";
}

resetButton.addEventListener("click", resetGame);

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        playGame(playerSelection, computerSelection);
    });
});