'use strict'

var gElCanvas
var gCtx
var gMeme
var gImg

// renderMeme()
function onInit() {

}

function onClickImage(idImg) {
    toggleModal()

    gImg = getImage(+idImg.id)
    gMeme = getMeme(+idImg.id)
    renderMeme()
}

function renderMeme() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    document.querySelector('.toolbar-input').value = gMeme.lines[gMeme.selectedLineIdx].txt
    drawImg2()

    gCtx.save()
}



function renderFromStorage() {

}

function drawImg2() {
    const img = new Image();
    img.src = gImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        // drawLine(0, 0)

        drawText(gMeme.lines[0].txt, gElCanvas.width / 2, 20, 0)
        drawText(gMeme.lines[1].txt, gElCanvas.width / 2, gElCanvas.height - 100, 1)

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

function drawText(txt, x, y, i) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = `${gMeme.lines[i].size}px Impact`;
    console.log(gMeme.lines[i].color);
    gCtx.fillStyle = gMeme.lines[i].color;
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
    console.log(gMeme.lines[0].color);
    renderMeme()
}

function onFontSizeChange(param) {
    setFontSize(param)
    renderMeme()
}

function onChangeLine() {
    setLine()
    renderMeme()
    // gMeme.lines[gMeme.selectedLineIdx].focus()
}

function onSaveMeme() {
    console.log(gCtx);
    saveMeme(gCtx)
}

function onEmojiSelect(e) {
    drawText(e.target.innerText, gElCanvas.width / 2, gElCanvas.height - 200, 1);
}


function onShareMeme() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}
