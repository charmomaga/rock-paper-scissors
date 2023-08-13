// Function to randomly return computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to play a single round of the game and determine the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// Function to run the game 5x
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // loop for 5 rounds
    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(
            "Round " + round + ": Rock, Paper, or Scissors:"
        );
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        // Determine round outcome and update scores
        if (roundResult === "player") {
            playerScore++;
            console.log("You win round ${round}!");
        } else if (roundResult === "computer") {
            computerScore++;
            console.log("Computer wins round ${round}!");
        } else {
            console.log("Round ${round} is a tie.");
        }
    }

    // Declare the winner at the end of the game
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie.");
    }
}

// Call the game function to start playing
game();
