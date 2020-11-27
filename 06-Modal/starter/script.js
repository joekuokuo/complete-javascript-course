'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal'); // create a list for all selected Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  //   console.log(btnShowModal[i].textContent);
  btnShowModal[i].addEventListener('click', function () {
    // console.log('Button clicked'); //test

    // usually we add and remove the hidden class to
    modal.classList.remove('hidden'); // don't use ".hidden"
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
