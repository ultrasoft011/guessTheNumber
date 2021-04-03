'use strict';

let secretNumber = Math.trunc(Math.random() * 21) + 1;
let result = 20;
let highResult = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber) {
        document.querySelector('.message').textContent = 'That is not a number! 🤔' ;
        console.log(guessNumber);
    }
    // When the user wins the game
    else if (guessNumber == secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'You found the secret number!🎉';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '25rem';
        if (result > highResult) {
            highResult = result;
            document.querySelector('.highscore').textContent = highResult;
        }
    }
    else if (guessNumber > secretNumber) {
        document.querySelector('.message').textContent = 'The secret number is lower, try again! 🙊';
        result -= 1;
        if(result < 1) {
            document.querySelector('.message').textContent = 'You Lose 😿';
            document.querySelector('.number').textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }
        else {
            document.querySelector('.score').textContent = result;
        }
    }
    else if (guessNumber < secretNumber) {
        document.querySelector('.message').textContent = 'The secret number is higher, keep trying! 🙈';
        result -= 1;
        if(result < 1) {
            document.querySelector('.message').textContent = 'You Lose 😿';
            document.querySelector('.number').textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }
        else {
            document.querySelector('.score').textContent = result;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 21) + 1;
    result = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
