'use strict';

//DOM manipulation
// select class message
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number :)';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

let secreteNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // to convert a string to number
  //   console.log(guess, typeof guess);

  // To make sure there is a number for the input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    // When the player wins
  } else if (guess === secreteNum) {
    // document.querySelector('.message').textContent = 'Correct Number :)';
    displayMessage('Correct Number :)');

    document.querySelector('.number').textContent = secreteNum;

    // The attribute in the style should be in camel case style.
    document.querySelector('body').style.backgroundColor = '#60b347'; // the color should be specified in a string

    // Also try to change the width of the class="number".
    document.querySelector('.number').style.width = '40rem';

    // keep track of the highest score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //   guess > secreteNum ? 'The guess is too high' : 'The guess is too low!';
      displayMessage(
        guess > secreteNum ? 'The guess is too high' : 'The guess is too low!'
      );
      score--;
    } else {
      //   document.querySelector('.message').textContent = 'Lost!!!';
      displayMessage('Lost!!!');
      score = 0;
    }
  }
  //   else if (guess > secreteNum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'The guess is too high';
  //       score--;
  //     } else {
  //       document.querySelector('.message').textContent = 'Lost!!!';
  //       score = 0;
  //     }
  //   } else {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'The guess is too low';
  //       score--;
  //     } else {
  //       document.querySelector('.message').textContent = 'Lost!!!';
  //       score = 0;
  //     }
  //   }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // reset the score, guess number
  document.querySelector('.score').textContent = 20;
  score = 20;
  secreteNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = null;
});
