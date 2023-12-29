var toggleModal = document.querySelectorAll('.toggle-modal');


for (var m = 0; m < toggleModal.length; m++) {

    toggleModal[m].addEventListener('click', function () {
        var overlay = document.querySelector('.overlay');
        var modalForm = document.querySelector('#modal-form');

        overlay.classList.toggle('visible');
        modalForm.classList.toggle('visible');
    })
};