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

let scores, currentScore, playing, stillPlaying;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  playing = 0;
  stillPlaying = true;
  scores = [0, 0];
  score0Ele.textContent = scores[0];
  score1Ele.textContent = scores[1];

  currentScore = 0;
  current0Ele.textContent = currentScore;
  current1Ele.textContent = currentScore;

  playing = 0;
  stillPlaying = true;
  dicEle.classList.add('hidden');

  //   dicEle.classList.remove('hidden');
  for (let i = 0; i < 2; i++) {
    document
      .querySelector(`.player--${i}`) // add "." in front of the class name
      .classList.remove('player--winner');
  }
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
};

const switchPlayer = function () {
  // Switch palyers
  document.getElementById(`current--${playing}`).textContent = 0;
  playing = playing === 0 ? 1 : 0;
  currentScore = 0;

  // toggle the player
  player0Ele.classList.toggle('player--active'); // don't use ".player--..."
  player1Ele.classList.toggle('player--active');
};

// start the game
init();

// Rolling dice
btnRoll.addEventListener('click', function () {
  if (stillPlaying) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (stillPlaying) {
    // 1. Add current score to activate player
    scores[playing] += currentScore;
    document.getElementById(`score--${playing}`).textContent = scores[playing];
    // 2. Check if the score is >= 100?
    if (scores[playing] >= 100) {
      // True: Finish the game
      stillPlaying = false;
      dicEle.classList.add('hidden');

      document
        .querySelector(`.player--${playing}`) // add "." in front of the class name
        .classList.add('player--winner');
      document
        .querySelector(`.player--${playing}`)
        .classList.add('player--active');
    }
    // Switch player
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
