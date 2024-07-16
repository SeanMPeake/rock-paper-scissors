"use strict";

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (rand) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) =>  
    btn.addEventListener("click", () => {
    const humanChoice = btn.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
}));

function runningScore(humanScore, computerScore, tieScore) {
    score.textContent = `Player: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`; 
}

const paperBeatsRock = "Paper beats rock.";
const rockBeatsScissors = "Rock beats scissors";
const scissorsBeatPaper = "Scissors beat paper.";
const playerWins = "You win!";
const playerLoses = "You lose!";

let computerScore = 0;
let humanScore = 0;
let tieScore = 0;

const round = document.querySelector("#round");
const score = document.querySelector("#score");

function playRound(computerChoice, humanChoice) {

    if (computerChoice === humanChoice) {
        tieScore++;
        round.textContent = "It's a tie!";
        runningScore(humanScore, computerScore, tieScore);
        

    } else if (computerChoice === 'rock') {

        if (humanChoice === 'paper') {
            humanScore++;
            round.textContent = `${playerWins} ${paperBeatsRock}`
            runningScore(humanScore, computerScore, tieScore);
        } else if (humanChoice === 'scissors') {
            computerScore++;
            round.textContent = `${playerLoses} ${rockBeatsScissors}`;
            runningScore(humanScore, computerScore, tieScore);
        }        

    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            computerScore++;
            round.textContent = `${playerLoses} ${paperBeatsRock}`;
            runningScore(humanScore, computerScore, tieScore);
        } else if (humanChoice === 'scissors') {
            humanScore++;
            round.textContent = `${playerWins} ${scissorsBeatPaper}`;
            runningScore(humanScore, computerScore, tieScore);
        }

    } else if (computerChoice === 'scissors') {
        if (humanChoice === 'rock') {
            humanScore++;
            round.textContent = `${playerWins} ${rockBeatsScissors}`;
            runningScore(humanScore, computerScore, tieScore);       
        } else if (humanScore === 'paper') {
            computerScore++;
            round.textContent = `${playerLoses} ${scissorsBeatPaper}`;
            runningScore(humanScore, computerScore, tieScore);   
        }
    }
    
    if (humanScore === 5) {
        round.textContent = "You win the game!"
    } else if (computerScore === 5) {
        round.textContent = "Computer wins the game!";
    }
}




