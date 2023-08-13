// randomly return rock, paper or scissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// fn that plays a single round of RPS that takes 2 parameters playerSelection and computerSelection
// return a string that declares the winner
// You Lose! Paper beats Rock
// playerSelection case-insensitive
// return results of fn call
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! Nobody wins.";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.";
    } else {
        return "You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.";
    }
}

const playerSelection = prompt("Rock, Paper, or Scissors:");
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);

// new fn called game(), use previous fn inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
// use prompt() to get input from user
