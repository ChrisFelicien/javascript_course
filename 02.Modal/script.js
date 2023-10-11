'use strict';


const openModalBtns = document.querySelectorAll('.show-modal');
const modalBox = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
let openModal = true;

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    openModal = !false;
    return removeHiddenClass();
  }
  return;
});

const removeHiddenClass = () => {
  if (openModal) {
    modalBox.classList.add('hidden');
    overlay.classList.add('hidden');
    return;
  }
  modalBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const setOpenModal = () => (openModal = !openModal);

overlay.addEventListener('click', () => {
  setOpenModal();
  removeHiddenClass();
});

closeModalBtn.addEventListener('click', () => {
  setOpenModal();
  removeHiddenClass();
});

openModalBtns.forEach(btn =>
  btn.addEventListener('click', () => {
    setOpenModal();
    removeHiddenClass();
  })
);

