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
    document.querySelector('.toolbar-input').value = gMeme.lines[gMeme.selectedLineIdx].txt

    drawImg2()

}


function drawImg2() {
    const img = new Image();
    img.src = gImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        // drawLine(0, 0)
        drawText(gMeme.lines[gMeme.selectedLineIdx].txt, gElCanvas.width / 2, 20)
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
    gCtx.font = '40px Impact';
    gCtx.fillStyle = gMeme.lines.color;
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
    let elColor = document.querySelector('.invisible').click()

}

function getColor() {
    const bgColor = document.querySelector('.invisible').value
    setTxtColor(bgColor)
    renderMeme()
}