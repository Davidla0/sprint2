'use strict'


function renderGallery() {
    const imgs = getImgForDisplay()
    const elGrid = document.querySelector('.grid-container')

    let strHTML = imgs.map(img => `
    <img id=${img.id} class="grid" src="${img.url}" onclick="onClickImage(this)" alt="">`)

    elGrid.innerHTML = strHTML.join(' ')
}

function onFilterBy(filterBy) {
    setImgFilter(filterBy)
    renderGallery()
}