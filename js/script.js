let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;

  computerChoice = Math.floor(Math.random() * 3) + 1; // get a random number between 1 and 3

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
} 

function getHumanChoice() {
  let humanChoice = prompt("chose: Rock, Paper, Scissors").toLowerCase();

  let validChoices = ["rock", "paper", "scissors"];

  if (!validChoices.includes(humanChoice)) {
    alert("Please chose: Rock, Paper, Scissors");
    return getHumanChoice();
  } else {
    return humanChoice;
  }
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    alert("it's a tie!");
  }
  if (
    (humanSelection === "paper" && computerSelection == "scissors") ||
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    alert(`Computer chose: ${computerSelection}, you lost!`);
    computerScore++;
  } else if (
    (humanSelection === "scissors" && computerSelection == "paper") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "rock" && computerSelection === "scissors")
  ) {
    alert(`Computer chose: ${computerSelection}, you won!`);
    humanScore++;
  }
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    alert(`You win! ${humanScore} vs ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`You lost! ${computerScore} vs ${humanScore}`);
  } else if (computerScore === humanScore && computerScore != humanScore) {
    alert("it's a tie!");
  }
}

playGame();
