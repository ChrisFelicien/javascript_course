'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const userChoice = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', () => {
  if (!userChoice.value || userChoice * 1 === NaN)
    return (message.textContent = 'Please enter a valide value');

  console.log(userChoice.value);
});
