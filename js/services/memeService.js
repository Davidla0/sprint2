'use strict'
const STORAGE_KEY = 'memeDB'
const gSavedMemes = []

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = getImgForDisplay();
var gMeme
var gMemes


function createMeme(id) {
    return {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [{
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'left',
            color: 'white'
        },
        {
            txt: 'Another line',
            size: 40,
            align: 'left',
            color: 'white'
        }
        ]
    }
}

function getMeme(id) {
    gMeme = createMeme(id)
    return gMeme

}

function getImage(idx) {
    return gImgs.find(img => img.id === idx)
}

function setImg() {

}

function getImages() {
    return gImgs
}

function setLineTxt(newTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
}

function setTxtColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFontSize(param) {
    gMeme.lines[gMeme.selectedLineIdx].size += param
}

function setLine() {
    gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0
    console.log(gMeme.selectedLineIdx);
}

function saveMeme() {

    gSavedMemes[gMeme.selectedImgId] = gMeme
    _saveMemeToStorage()
}

function loadMemesFromStorage() {
    gMemes = _loadFromStorage()
    return gMemes
}

function _saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gSavedMemes)
}

function _loadFromStorage() {
    return loadFromStorage(STORAGE_KEY, gSavedMemes)
}

