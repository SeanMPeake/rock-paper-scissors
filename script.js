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
        

    } else if (computerChoice === 'rock' && 
               humanChoice === 'paper') {
        humanScore++;
        round.textContent = "You win! Paper beats rock.";
        runningScore(humanScore, computerScore, tieScore);
        

    } else if (computerChoice === 'rock' && 
               humanChoice === 'scissors') {
        computerScore++;
        round.textContent = "You lose! Rock beats scissors.";
        runningScore(humanScore, computerScore, tieScore);
        

    } else if (computerChoice === 'paper' &&
               humanChoice === 'rock') {
        computerScore++;
        round.textContent = "You lose! Paper beats rock.";
        runningScore(humanScore, computerScore, tieScore);
        

    } else if (computerChoice === 'paper' &&
               humanChoice === 'scissors') {
        humanScore++;
        round.textContent = "You win! Scissors beat paper.";
        runningScore(humanScore, computerScore, tieScore);
        

    } else if (computerChoice === 'scissors' &&
               humanChoice === 'rock') {
        humanScore++;
        round.textContent = "You win! Rock beats scissors.";
        runningScore(humanScore, computerScore, tieScore);
        

    } else if (computerChoice === 'scissors' && 
               humanScore === 'paper') {
        computerScore++;
        round.textContent = "You lose! Scissors beat paper.";
        runningScore(humanScore, computerScore, tieScore);
        
    }
    
    if (humanScore === 5) {
        round.textContent = "You win the game!"
    } else if (computerScore === 5) {
        round.textContent = "You win the game!";
    }
}




