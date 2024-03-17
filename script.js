function getComputerChoice() {
    let selection = ["rock", "paper", "scissors"];
    let randomChoice = selection[Math.floor(Math.random() * selection.length)];
    return randomChoice;
}

function validateWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        return "You Win";
    } else {
        return "Computer win";
    }
}

function playRound(playerSelection, computerSelection) {
    let gameResult = validateWinner(playerSelection, computerSelection);

    if (gameResult == "Tie") {
        return `Tie! ${playerSelection} equals ${computerSelection}`;
    } else if (gameResult == "You Win") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

function userValidation() {
    let validateInput = false;
    let choices = ["paper", "rock", "scissors"];

    while (validateInput == false) {
        const userInput = prompt("Please select Rock Paper Scissors");
        if (userInput == null) {
            continue;
        }
        const convertInput = userInput.toLowerCase();
        if (choices.includes(convertInput)) {
            validateInput = true;
            return convertInput;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Let's Play");
    for (let i = 0; i < 5; i++) {
        const playerSelection = userValidation();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (validateWinner(playerSelection, computerSelection) == "You Win") {
            playerScore++;
        } else if (validateWinner(playerSelection, computerSelection) == "Computer win") {
            computerScore++;
        }
    }
    console.log("Game Over");
    if (playerScore > computerScore) {
        console.log("You win!!");
    } else if (computerScore > playerScore) {
        console.log("You lose. Computer Wins!!")
    } else {
        console.log("Ties");
    }
}

game();



