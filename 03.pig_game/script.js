'use strict';

// Selecting element from DOM
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let activePlayer = 0; //The player who start the game
const scores = [0, 0];
let currentScore = 0;
const scorOneEl = document.getElementById('score--0');
const scoreTwoEl = document.getElementById('score--1');
const btns = document.querySelectorAll('.btn');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

//Starting condition

diceEl.classList.add('hidden'); // Hide the dice on when the game start
scorOneEl.textContent = 0;
scoreTwoEl.textContent = 0;

//Respomding to btns click event

// Function to Generate a random Number between 1-6
const randomNumberGenerator = () => Math.trunc(Math.random() * 6) + 1;

// Function swicth player

const swicthPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Function to  display the dice
const rollingAnddisplayDice = () => {
  const currentNumber = randomNumberGenerator();
  // 1. Remove the hidden class
  const diceImg = `dice-${currentNumber}.png`;

  //   2. Set src Attribute to dice
  diceEl.src = diceImg;

  diceEl.classList.remove('hidden');

  //   3. Check if the current rool dice isn't one

  if (currentNumber !== 1) {
    currentScore += currentNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    swicthPlayer();
    currentScore = 0;
  }
};

btns.forEach(btn =>
  btn.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('btn--roll')) {
      rollingAnddisplayDice();
    }
  })
);
