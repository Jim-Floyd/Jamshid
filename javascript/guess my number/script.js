'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1
let score = 20;
console.log(secretNum)
console.log(document.querySelector('.label-score').textContent)


document.querySelector('.check').addEventListener('click', function () {
    if (!Number(document.querySelector('.guess').value)) {
        document.querySelector('.message').textContent = '❌ No number has entered'
    } else if (Number(document.querySelector('.guess').value) === secretNum) {
        document.querySelector('.number').textContent = secretNum
        document.querySelector('.message').textContent = '🎂 Correct number'
    } else if (Number(document.querySelector('.guess').value) !== secretNum) {
        if (score>1) {

            if (document.querySelector('.guess').value > secretNum) {
                document.querySelector('.message').textContent = '📈Too high'
            } else {
                document.querySelector('.message').textContent = '📉Too low'
            }
            score--;
        } else {
            document.querySelector('.message').textContent = '💥You lost!'
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    // displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
