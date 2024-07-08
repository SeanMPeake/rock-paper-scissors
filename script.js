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

function getHumanChoice () {
    let humanChoice = prompt('Enter your choice (rock, paper, or scissors)');
    return humanChoice;
}

let computerScore = 0;
let humanScore = 0;
let tieScore = 0;

function playGame () {

    function playRound (computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            console.log('tie');
            tieScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'paper') {
            console.log('You win! Paper beats rock.');
            humanScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log('You lose! Rock beats scissors.');
            computerScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log('You lose! Paper beats rock.');
            computerScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
            console.log('You win! Scissors beat paper.');
            humanScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            console.log('You win! Rock beats scissors.');
            humanScore++;
        } else if (computerChoice === 'scissors' && humanScore === 'paper') {
            console.log('You lose! Scissors beat paper.');
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        humanChoice = humanChoice.toLowerCase();

        playRound(computerChoice, humanChoice);
    }

    if (computerScore === humanScore) {
        console.log('It\'s a tie!');
    } else if (computerScore < humanScore) {
        console.log('You win the game!');
    } else {
        console.log('You lose the game!');
    }

}

playGame();
