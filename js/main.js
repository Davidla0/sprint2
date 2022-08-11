'use strict'

function onInit() {
    console.log('sd');
    renderGallery()
}

function toggleModal() {
    document.body.classList.toggle('modal-opened');
}

function toggleMenu() {
    document.body.classList.toggle('menu-opened');
}

function closeModal(event) {
    console.log(event);
    if (event.key === "Escape") {
        console.log('working');
        toggleModal()

    }
}