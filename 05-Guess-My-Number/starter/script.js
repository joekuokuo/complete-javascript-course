'use strict';

//DOM manipulation
// select class message
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number :)';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // to convert a string to number
  console.log(guess, typeof guess);

  // To make sure there is a number for the input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
