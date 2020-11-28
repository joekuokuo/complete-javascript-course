'use strict';

// Select player
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');

// Select elements
const score0Ele = document.querySelector('#score--0');
// getElementById may be a little faster and no hash to be added
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');

// Get the dice
const dicEle = document.querySelector('.dice');
// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
dicEle.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let playing = 0;

// Rolling dice
btnRoll.addEventListener('click', function () {
  const num = Math.trunc(Math.random() * 6 + 1);
  console.log(num);
  // Display the hidden dice
  dicEle.classList.remove('hidden');
  dicEle.src = `dice-${num}.png`;

  if (num != 1) {
    // Add the score to the current score
    currentScore += num;
    document.getElementById(`current--${playing}`).textContent = currentScore;
    // current0Ele.textContent = currentScore; // change later
  } else {
    // Switch palyers
    document.getElementById(`current--${playing}`).textContent = 0;
    playing = playing === 0 ? 1 : 0;
    currentScore = 0;

    // toggle the player
    player0Ele.classList.toggle('player--active'); // don't use ".player--..."
    player1Ele.classList.toggle('player--active');
  }
});
