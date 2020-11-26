'use strict';

//DOM manipulation
// select class message
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number :)';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
