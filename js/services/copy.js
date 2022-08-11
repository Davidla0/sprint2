'use strict'
const STORAGE_KEY = 'memeDB'
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/meme-imgs/1.jpg', keywords: ['animals', 'cute'] },
    { id: 2, url: 'img/meme-imgs/2.jpg', keywords: ['animals', 'cute', 'baby'] },
    { id: 3, url: 'img/meme-imgs/3.jpg', keywords: ['animals', 'cute'] },
    { id: 4, url: 'img/meme-imgs/4.jpg', keywords: ['animals', 'cute'] },
    { id: 5, url: 'img/meme-imgs/5.jpg', keywords: ['animals', 'cute'] },
    { id: 6, url: 'img/meme-imgs/6.jpg', keywords: ['animals', 'cute'] },
    { id: 7, url: 'img/meme-imgs/7.jpg', keywords: ['animals', 'cute'] },
    { id: 8, url: 'img/meme-imgs/8.jpg', keywords: ['animals', 'cute'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },


];
var gMeme
var gId

function createMeme() {
    return {
        selectedImgId: gId,
        selectedLineIdx: 0,
        lines: [{
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'white'
        },
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'white'
        }
        ]
    }
}

function getMeme() {
    var meme = loadFromStorage(STORAGE_KEY)
    if (!meme || !meme.length) {
        meme = createMeme()
    }
    gMeme = meme
    return gMeme
}

function getImage(idx) {
    const img = gImgs.find(img => img.id === idx)
    gId = img.id
    return img
}

function getSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function getColor() {
    return gMeme.lines[gMeme.selectedLineIdx].color
}

function getText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function getImages() {
    return gImgs
}

function setLineTxt(newTxt) {
    console.log(newTxt);
    gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
    _saveCarsToStorage()
    console.log(gMeme.lines[gMeme.selectedLineIdx].txt);
}

function setTxtColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    _saveCarsToStorage()
}

function setFontSize(param) {
    gMeme.lines[gMeme.selectedLineIdx].size += param
    _saveCarsToStorage()
}

function setLine() {
    gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0
    _saveCarsToStorage()
}

function _saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}



//controller







'use strict'

var gElCanvas
var gCtx
var gMeme
var gImg

// renderMeme()
function onInit() {

}

function onClickImage(idImg) {

    gImg = getImage(+idImg.id)
    gMeme = getMeme(gImg)
    renderMeme()
}

function renderMeme() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    document.querySelector('.toolbar-input').value = getText()

    drawImg2()

}


function drawImg2() {
    const img = new Image();
    img.src = gImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        // drawLine(0, 0)
        drawText(getText(), gElCanvas.width / 2, 20)
    };

}

function drawLine(x, y, xEnd = 250, yEnd = 250) {
    gCtx.beginPath();
    gCtx.lineWidth = 2;
    gCtx.moveTo(x, y);
    gCtx.lineTo(xEnd, yEnd);
    gCtx.strokeStyle = 'red';
    gCtx.stroke();
    gCtx.closePath();
}

function drawText(txt, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = `${getSize()}px Impact`;
    gCtx.fillStyle = getColor();
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

function onChangedTxt(e) {
    setLineTxt(e.target.value)
    renderMeme()
}

function openColorSelector() {
    document.querySelector('.invisible').click()

}

function getColor() {
    const bgColor = document.querySelector('.invisible').value
    setTxtColor(bgColor)

    renderMeme()
}

function onFontSizeChange(param) {
    setFontSize(param)
    renderMeme()
}

function onChangeLine() {

}