const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector("#game-result");
const userSelection = document.querySelector("#user-selection");
const computerSelection = document.querySelector("#computer-selection");
const gamePrompt = document.querySelector("#game-prompt");
const resetButton = document.querySelector("#reset-game");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

let playerCount = 0;
let computerCount = 0;
let tieCount = 0;

function getComputerChoice() {
    const selection = ["rock", "paper", "scissors"];
    const computerRandom = Math.floor(Math.random() * selection.length);
    return selection[computerRandom];
}

function verifyWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE";
    } else if (
        playerSelection === "rock" && computerSelection == "paper" ||
        playerSelection === "paper" && computerSelection == "rock" ||
        playerSelection === "rock" && computerSelection == "scissors"
     ) {
        return "YOU WIN";
     } else {
        return "YOU LOSE";
     }
}

function playRound(playerSelection, computerSelection) {
    let validWinner = verifyWinner(playerSelection, computerSelection);

    if (validWinner == "TIE") {
        gameResult.textContent = `TIE! ${playerSelection} equals ${computerSelection}`;
    } else if (validWinner == "YOU WIN") {
        gameResult.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
    } else {
        gameResult.textContent = `COMPUTER WIN! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame(playerSelection, computerSelection) {
    let winner = verifyWinner(playerSelection, computerSelection);
    
    if (winner == "YOU WIN") {
        playerCount++;
        userScore.textContent = playerCount;
    } else if (winner == "YOU LOSE") {
        computerCount++;
        computerScore.textContent = computerCount;
    } else {
        tieCount++;
        console.log(tieCount++);   
    }

    if (playerCount === 5 || computerCount === 5) {
        gamePrompt.textContent = "Game Over";
        if (playerCount === 5) {
            console.log("You Win");
        } else {
            console.log("Computer Wins")
        }   
        buttons.forEach((button) => {
            if (button !== resetButton) {
                button.disabled = true;
            }
        });
    }
}

function resetGame() {
    playerCount = 0;
    computerCount = 0;
    tieCount = 0;
    userScore.textContent = 0;
    computerScore.textContent = 0;
    gamePrompt.textContent = "";
    gameResult.textContent = "";

    gameResult.textContent = "Lets Play";

    buttons.forEach((button) => {
        button.disabled = false;
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice()
        playRound(button.id, computerSelection);
        playGame(button.id, computerSelection);
    });
});

resetButton.addEventListener("click", resetGame);
