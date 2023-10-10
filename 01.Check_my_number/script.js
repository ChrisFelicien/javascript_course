'use strict';

let CurrentScore = 20;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const scoreView = document.querySelector('.score');
const userHighscore = document.querySelector('.highscore');
const winNumber = Math.trunc(Math.random() * 20) + 1;
const restartGame = document.querySelector('.again');

const restart = () => {};

const handleCheckClick = () => {
  const userChoice = document.querySelector('.guess').value;

  if (!userChoice) {
    message.style.color = 'red';
    return (message.textContent = 'Please enter a valide value');
  }

  checkTwoNumberEquality(userChoice, winNumber);
};

const checkTwoNumberEquality = (userNumber, machineNumber) => {
  console.log('Click');
  if (userNumber > machineNumber) {
    if (CurrentScore >= 1) {
      CurrentScore--;
      score.textContent = CurrentScore;
      return (message.textContent = 'Your Number is high');
    } else {
      checkBtn.removeEventListener('click', handleCheckClick, false);
      return (message.textContent = 'Sorry you lost the game');
    }
  } else if (userNumber < machineNumber) {
    if (CurrentScore >= 1) {
      CurrentScore--;
      score.textContent = CurrentScore;

      return (message.textContent = 'Your Number is low');
    } else {
      checkBtn.removeEventListener('click', handleCheckClick, false);
      return (message.textContent = 'Sorry you lost the game');
    }
  }
  number.textContent = winNumber;
  userHighscore.textContent = CurrentScore;
  document.querySelector('body').style.backgroundColor = 'green';
  return (message.textContent = 'Congratulation you won the game');
};

// Adding event to the check button

checkBtn.addEventListener('click', handleCheckClick);
