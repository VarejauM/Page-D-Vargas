
var sliderContainer = document.querySelector('.slider-container');
var sliderList = document.querySelector('.slider-list');
var sliderItem = document.querySelectorAll('.slider-item');
var sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var containerWidth = sliderContainer.parentElement.offsetWidth;
var containerHeight = sliderContainer.parentElement.offsetHeight;
var prevItem = document.querySelector('.nav-previous');
var nextItem = document.querySelector('.nav-next');
var sliderPos = 0;
var navItems = document.querySelectorAll('.nav-item')
var currentSlideNumber = 1;
var slideThumbs = document.querySelectorAll('.slide-thumb');
var slideInfo = document.querySelectorAll('.slide-info');


// Largura container pros items e largura total pra lista

sliderContainer.style.width = containerWidth + 'px';

for (w = 0; w < sliderItem.length; w++) {

    sliderItem[w].style.width = containerWidth + 'px';
    sliderItem[w].style.height = containerHeight + 'px';

    var sliderItemWidth = sliderItem[w].offsetWidth;
    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

//Next e Prev functions

const nextItemAnim = () => {
    clearTimeout();
    if (Math.abs(sliderPos) < (sliderListWidth - containerWidth)) {
        sliderPos -= containerWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos,
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        currentSlideNumber += 1;
        itemAnim();
        animSlide();
    } else {
        sliderPos = 0;
        anime({
            targets: sliderList,
            translateX: sliderPos,
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        currentSlideNumber = 1;
        itemAnim();
        animSlide();
    }
};

const prevItemAnim = () => {
    clearTimeout();
    if (Math.abs(sliderPos) > (0)) {
        sliderPos += containerWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos,
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        currentSlideNumber -= 1;
        itemAnim();
        animSlide();
    } else {
        sliderPos = -(sliderListWidth - containerWidth);
        anime({
            targets: sliderList,
            translateX: sliderPos,
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        currentSlideNumber = sliderTotalItems;
        itemAnim();
        animSlide();
    }
};

// Nav item Selections

const itemAnim = () => {

    for (nv = 0; nv < navItems.length; nv++) {
        let navNum = parseInt(navItems[nv].getAttribute('data-nav'));
        if (navNum === currentSlideNumber) {
            navItems[nv].classList.add('nav-item-selected');
            anime({
                targets: navItems[nv],
                scale: [1, 1.7],
                easing: 'cubicBezier(0,1.01,.32,1)',
            });
            animSlide();
        } else {
            navItems[nv].classList.remove('nav-item-selected');
            anime({
                targets: navItems[nv],
                scale: [1, 1],
            });
        }
    }
};

const itemSelect = () => {
    for (cl = 0; cl < navItems.length; cl++) {
        let navNum = parseInt(navItems[cl].getAttribute('data-nav'));
        navItems[cl].addEventListener('click', function () {
            currentSlideNumber = navNum;
            sliderPos = -(containerWidth * (navNum - 1))
            anime({
                targets: sliderList,
                translateX: sliderPos,
                easing: 'cubicBezier(0,1.01,.32,1)',
            });
            itemAnim();
        });
    }
};

// Timeout Slide 

const slideTimer = () => {
    setTimeout(function () {
        nextItemAnim();
        slideTimer();
    }, 6000);
};

//Anim Pictures

const animSlide = () => {
    let targetToAnim = slideThumbs[currentSlideNumber - 1];
    let targetToAnim2 = slideInfo[currentSlideNumber - 1];
    anime({
        targets: targetToAnim,
        scale: [1, 1],
        easing: 'easeInOutQuad',

    });
    targetToAnim2.classList.add('slide-info-active');
    anime({
        targets: targetToAnim2,
        scale: [1, 1],
        easing: 'easeInOutQuad',
    });
};




//chamadas

itemAnim();
slideTimer();

prevItem.addEventListener('click', function () {
    prevItemAnim();
    itemAnim();
});

nextItem.addEventListener('click', function () {
    nextItemAnim();
    itemAnim();
});

itemSelect(); 