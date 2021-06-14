var emblaNode = document.querySelector('.embla')
var options = { loop: 1, speed: 100 }

var embla = EmblaCarousel(emblaNode, options)

var prevBtn = document.querySelector(".embla__button--prev");
var nextBtn = document.querySelector(".embla__button--next");

function setupPrevNextBtns (prevBtn, nextBtn) {
    prevBtn.addEventListener('click', embla.scrollPrev, false);
    nextBtn.addEventListener('click', embla.scrollNext, false);
}

setupPrevNextBtns(prevBtn, nextBtn);

var imgArray = [];
for (var i = 0; i < 27; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : '0' + (i + 1); 
    var imgPath = 'data/lack.array/lack' + imgNumber + '.png'
    imgArray.push(imgPath)
}


var slidesEl = document.querySelector('.embla__slide')
imgArray.forEach(function(imgPath) {
    var counter = 0
    var imgEl = document.createElement ('img')
    imgEl.style.width = '100%';
    imgEl.src = imgPath;
    slidesEl.appendChild(imgEl)
})


