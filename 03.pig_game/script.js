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
let gameOver = false;

//Starting condition

diceEl.classList.add('hidden'); // Hide the dice on when the game start
scorOneEl.textContent = 0;
scoreTwoEl.textContent = 0;

//Respomding to btns click event

// Function to Generate a random Number between 1-6
const randomNumberGenerator = () => Math.trunc(Math.random() * 6) + 1;

// Function swicth player

const swicthPlayer = () => {
  diceEl.classList.add('hidden');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// function to start new game

const startNewGame = () => {
  gameOver = false;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;

  scorOneEl.textContent = 0;
  scoreTwoEl.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  activePlayer = 0;

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

// Function to hold the score

const holdScore = () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 10) {
    gameOver = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
    return 0;
  }
  return swicthPlayer();
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
  }
};

// Handle all btn click

btns.forEach(btn =>
  btn.addEventListener('click', e => {
    if (!gameOver) {
      if (e.currentTarget.classList.contains('btn--roll')) {
        rollingAnddisplayDice();
      }
      if (e.currentTarget.classList.contains('btn--hold')) {
        holdScore();
      }
    }
    if (e.currentTarget.classList.contains('btn--new')) {
      startNewGame();
    }
  })
);
