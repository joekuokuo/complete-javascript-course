'use strict';

//DOM manipulation
// select class message
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number :)';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

const secreteNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secreteNum;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // to convert a string to number
  console.log(guess, typeof guess);

  // To make sure there is a number for the input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secreteNum) {
    document.querySelector('.message').textContent = 'Correct Number :)';
  } else if (guess > secreteNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'The guess is too high';
      score--;
    } else {
      document.querySelector('.message').textContent = 'Lost!!!';
      score = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'The guess is too low';
      score--;
    } else {
      document.querySelector('.message').textContent = 'Lost!!!';
      score = 0;
    }
  }
  document.querySelector('.score').textContent = score;
});
