


const modalBtn = document.querySelector('.btn-model-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// Event listener to open the modal
modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

// Event listener to close the modal
closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});