'use strict'

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
// var gMeme = {
//     selectedImgId: 1,
//     selectedLineIdx: 0,
//     lines: [{
//         txt: 'I sometimes eat Falafel', size: 20,
//         align: 'left',
//         color: 'red'
//     }
//     ]
// }


function createMeme(id) {
    return {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [{
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
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
    gMeme.lines.color = color
}