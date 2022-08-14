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
    setKeyWords()
    renderSearchKeyword()
    renderGallery()
}

function renderSearchKeyword() {
    const keywords = getKeyWords()
    let strHTML
    const values = Object.values(keywords)
    var i = 0
    for (const key in keywords) {
        strHTML += `<span class="${key}" style="font-size:${values[i]}px">${key}</span>`
        i++
    }

    document.querySelector('.keywords-container').innerHTML = strHTML
}