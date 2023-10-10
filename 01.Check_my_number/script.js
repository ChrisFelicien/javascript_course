'use strict';

let CurrentScore = 20;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const scoreView = document.querySelector('.score');
const userHighscore = document.querySelector('.highscore');
const winNumber = Math.trunc(Math.random() * 20) + 1;

const checkTwoNumberEquality = (userNumber, machineNumber) => {
  if (userNumber > machineNumber) {
    CurrentScore = CurrentScore - 1;
    score.textContent = CurrentScore;
    return (message.textContent = 'Your Number is high');
  } else if (userNumber < machineNumber) {
    CurrentScore = CurrentScore - 1;
    score.textContent = CurrentScore;
    return (message.textContent = 'Your Number is low');
  }
  number.textContent = winNumber;
  userHighscore.textContent = CurrentScore;
  return (message.textContent = 'Congratulation you won the game');
};

checkBtn.addEventListener('click', () => {
  const userChoice = document.querySelector('.guess').value;

  if (!userChoice) {
    message.style.color = 'red';
    return (message.textContent = 'Please enter a valide value');
  }

  checkTwoNumberEquality(userChoice, winNumber);
});
