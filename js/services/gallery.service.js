
var gFilterBy
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
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },
    { id: 9, url: 'img/meme-imgs/9.jpg', keywords: ['animals', 'cute'] },
]

function getImgForDisplay() {
    var imgs = gImgs.filter(img => img.keywords.includes(gFilterBy))
    if (imgs.length === 0) imgs = gImgs;

    console.log(imgs);
    return imgs
}


function setImgFilter(filterBy) {
    if (filterBy !== undefined) gFilterBy = filterBy
    return gFilterBy
}

function getImgs() {
    return gImgs
}