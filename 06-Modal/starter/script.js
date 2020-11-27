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
    // usually we add and remove the hidden class to
    modal.classList.remove('hidden'); // don't use ".hidden"
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Use esc key press to close the modal
// key event is a global event, so add the event on the document itself
// keydown, keypress, keyup
// Need to look at the event itself to find out which key is pressed
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closeModal();
    // console.log('Esc pressed');
    // if (!modal.classList.contains('hidden')) {
    //   closeModal();
    // }
  }
});
