"use strict";

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (rand) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }
    console.log(computerChoice);
    return computerChoice;
}