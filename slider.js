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
