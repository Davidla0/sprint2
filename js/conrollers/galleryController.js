'use strict'


function renderGallery() {
    const elGrid = document.querySelector('.grid-container')
    const imgs = getImages()
    console.log('imgs:', imgs)
    let strHTML = imgs.map(img => `
    <img id=${img.id} class="grid" src="${img.url}" onclick="onClickImage(this)" alt="">`)

    elGrid.innerHTML = strHTML.join(' ')

}