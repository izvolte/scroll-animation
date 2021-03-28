function fadeIn(elem) {
    elem.classList.add('opacity');
    setTimeout(() => {
        elem.classList.add('hidden');
    }, 250);
}

function fadeOut(elem) {
    elem.classList.remove('hidden');
    setTimeout(() => {
        elem.classList.remove('opacity');
    }, 0);
}

function anim() {

    let start = new TimelineMax();
    start.fromTo('.header', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1})
        .fromTo('.section__videophones', 1, {y: 100, opacity: 0}, {y: 0, opacity: 1})
        .fromTo('.videophones__h1', 0.5, {y: -100, opacity: 0}, {y: 0, opacity: 1});


    let controllerSmile = new ScrollMagic.Controller();
    let tweenSmile = new TimelineMax();
    tweenSmile.fromTo('.smile__img', 1,
        {y: '-14vw'},
        {y: '14vw'}, 0
    ).fromTo(
        '.smile .side__text', 1,
        {y: '-10vw'},
        {y: '10vw'}, 0
    ).fromTo(
        '.smile .side__text', 0.75,
        {opacity: 0},
        {opacity: 1}, 0
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__smile',
        duration: document.querySelector('.section__smile').clientHeight * 2,
        offset: -document.querySelector('.section__smile').clientHeight / 2
    })
        .setTween(tweenSmile)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerSmile)
        .reverse();


    let controllerSmileSvg = new ScrollMagic.Controller();
    let tweenSmileSvg = new TimelineMax();
    tweenSmileSvg.fromTo('#smile > g > circle', 0.2,
        {
            'stroke-dashoffset': '1000',
            'stroke-dasharray': '569px'
        },
        {'stroke-dasharray': '500px'},
    ).fromTo('#smile > g > path:nth-child(4)', 0.2,
        {
            'stroke-dashoffset': '1000',
            'stroke-dasharray': '569px'
        },
        {'stroke-dasharray': '500px'},
    ).fromTo('#smile > g > path:nth-child(3)', 0.2,
        {
            'stroke-dashoffset': '1000',
            'stroke-dasharray': '569px'
        },
        {'stroke-dasharray': '500px'},
    ).fromTo('#smile > g > path:nth-child(2)', 0.5,
        {
            'stroke-dashoffset': '1000',
            'stroke-dasharray': '569px'
        },
        {'stroke-dasharray': '500px'},
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__smile',
        offset: document.querySelector('.section__smile').clientHeight / 2
    })
        .setTween(tweenSmileSvg)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerSmileSvg)
        .reverse();


    let controllerMagic = new ScrollMagic.Controller();
    let tweenMagic = new TimelineMax();
    tweenMagic.fromTo('.magic__img_front', 1,
        {y: '-15vw'},
        {y: '15vw'}, 0
    ).fromTo('.magic__img_back', 1,
        {y: '-18vw'},
        {y: '18vw'}, 0
    ).fromTo(
        '.magic .side__text', 1,
        {y: '-13vw'},
        {y: '13vw'}, 0
    ).fromTo(
        '.magic .side__text', 0.75,
        {opacity: 0},
        {opacity: 1}, 0
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__magic',
        duration: document.querySelector('.section__magic').clientHeight * 2,
        offset: -document.querySelector('.section__magic').clientHeight / 2
    })
        .setTween(tweenMagic)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerMagic)
        .reverse();


    let controllerFreedom = new ScrollMagic.Controller();
    let tweenFreedom = new TimelineMax();
    tweenFreedom.fromTo('.freedom__img_front', 1,
        {y: '-16vw'},
        {y: '16vw'}, 0
    ).fromTo('.freedom__img_back', 1,
        {y: '-18vw'},
        {y: '18vw'}, 0
    ).fromTo(
        '.freedom .side__text', 1,
        {y: '-13vw'},
        {y: '18vw'}, 0
    ).fromTo(
        '.freedom .side__text', 0.75,
        {opacity: 0},
        {opacity: 1}, 0
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__freedom',
        duration: document.querySelector('.section__freedom').clientHeight * 2,
        offset: -document.querySelector('.section__freedom').clientHeight / 2
    })
        .setTween(tweenFreedom)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerFreedom)
        .reverse();


    let controllerLegend = new ScrollMagic.Controller();
    let tweenLegend = new TimelineMax();
    tweenLegend.fromTo(
        '.legend .side__text', 1,
        {y: '-9vw'},
        {y: '0'}, 0
    ).fromTo(
        '.legend .side__text', 1,
        {opacity: 0},
        {opacity: 1}, 0
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__legend',
        duration: document.querySelector('.section__legend').clientHeight,
        offset: -document.querySelector('.section__legend').clientHeight / 3
    })
        .setTween(tweenLegend)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerLegend)
        .reverse();


    let controllerMask = new ScrollMagic.Controller();
    let tweenMask = new TimelineMax();
    tweenMask.fromTo(
        '.mask > div', 1,
        {y: '-4vw'},
        {y: '0'}, 0
    ).fromTo(
        '.mask > div', 0.75,
        {opacity: 0},
        {opacity: 1}, 0
    ).fromTo(
        '.ip > div', 1,
        {y: '-4vw'},
        {y: '0'}, 0
    ).fromTo(
        '.ip > div', 0.75,
        {opacity: 0},
        {opacity: 1}, 0
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__mask-ip',
        duration: document.querySelector('.section__mask-ip').clientHeight,
        offset: -document.querySelector('.section__mask-ip').clientHeight / 3
    })
        .setTween(tweenMask)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerMask)
        .reverse();


    let controllerMaskWifi = new ScrollMagic.Controller();
    let tweenMaskWifi = new TimelineMax();
    tweenMaskWifi.fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 1},
        {opacity: 0}
    ).fromTo(
        '#wifi > g > path:nth-child(3)', 0.1,
        {opacity: 0},
        {opacity: 1}
    ).fromTo(
        '#wifi > g > path:nth-child(2)', 0.1,
        {opacity: 0},
        {opacity: 1},
    ).fromTo(
        '#wifi > g > path:nth-child(1)', 0.1,
        {opacity: 0},
        {opacity: 1}
    );

    new ScrollMagic.Scene({
        triggerElement: '.section__mask-ip',
        offset: document.querySelector('.section__mask-ip').clientHeight / 3
    })
        .setTween(tweenMaskWifi)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerMaskWifi)
        .reverse();


    let controllerFantasy = new ScrollMagic.Controller();
    let tweenFantasy = new TimelineMax();
    tweenFantasy.fromTo(
        '.fantasy .side__text', 1,
        {y: '-10vw'},
        {y: '0'}, 0
    ).fromTo(
        '.fantasy .side__text', 0.5,
        {opacity: 0},
        {opacity: 1}, 0
    );
    new ScrollMagic.Scene({
        triggerElement: '.section__fantasy',
        duration: document.querySelector('.section__fantasy').clientHeight,
        offset: -document.querySelector('.section__fantasy').clientHeight / 3
    })
        .setTween(tweenFantasy)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerFantasy)
        .reverse();

    let controllerTabs = new ScrollMagic.Controller();
    let tweenTabs = new TimelineMax();
    tweenTabs.fromTo(
        '.tabs__h', 1,
        {y: '-5vw', opacity: 0},
        {y: '0', opacity: 1}, 0
    )
    new ScrollMagic.Scene({
        triggerElement: '.tabs',
        duration: document.querySelector('.tabs').clientHeight / 1.5,
        offset: -document.querySelector('.tabs').clientHeight / 3
    })
        .setTween(tweenTabs)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerTabs)
        .reverse();


    let controllerTabsItems = new ScrollMagic.Controller();
    let tweenTabsItems = new TimelineMax();
    tweenTabsItems.from(
        '.tabs__item', {y: '-3vw', opacity: 0, stagger: 0.1, duration: 0.2}
    ).from(
        '.tabs__line-cont', {opacity: 0, duration: 0.2}
    ).from(
        '.tabs__line', {width: 0}
    ).from(
        '.tabs__photo', {y: '5vw', opacity: '0'}
    )
    new ScrollMagic.Scene({
        triggerElement: '.tabs__ul'
    })
        .setTween(tweenTabsItems)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerTabsItems)
        .reverse();


    let controllerDomino = new ScrollMagic.Controller();
    let tweenDomino = new TimelineMax();
    tweenDomino.fromTo(
        '.fantasy__img_1', 0.5,
        {y: '-20vw', opacity: 0},
        {y: '0', opacity: 1}, 0
    ).fromTo(
        '.fantasy__img_2', 0.5,
        {y: '20vw', opacity: 0},
        {y: '0', opacity: 1}, 0.3
    ).fromTo(
        '.fantasy__img_3', 0.5,
        {y: '-20vw', opacity: 0},
        {y: '0', opacity: 1}, 0.4
    ).fromTo(
        '.fantasy__img_4', 0.5,
        {y: '20vw', opacity: 0},
        {y: '0', opacity: 1}, 0.5
    ).fromTo(
        '.fantasy__img_5', 0.5,
        {y: '-20vw', opacity: 0},
        {y: '0', opacity: 1}, 0.6
    ).fromTo(
        '.fantasy__img_6', 0.5,
        {y: '20vw', opacity: 0},
        {y: '0', opacity: 1}, 0.7
    );
    new ScrollMagic.Scene({
        triggerElement: '.section__fantasy'
    })
        .setTween(tweenDomino)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controllerDomino)
        .reverse();
}

function tabs(elem) {
    const listElem = elem.querySelector('.tabs__ul');
    const arrElem = elem.querySelectorAll('.tabs__item');
    const line = elem.querySelector('.tabs__line');
    const arrImg = elem.querySelectorAll('.tabs__cont-photo');
    listElem.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('tabs__item')) {
            let prevActive = elem.querySelector('.tabs__item.active');
            prevActive.classList.remove('active');
            target.classList.add('active');
            let x = target.offsetLeft - listElem.offsetLeft;
            let w = target.offsetWidth;
            line.style.width = w + 'px';
            line.style.transform = `translate(${x}px)`;
            arrElem.forEach((item, i) => {
                if (item === prevActive) {
                    fadeIn(arrImg[i]);
                }
                if (item === target) {
                    fadeOut(arrImg[i]);
                }
            });
        }
    });
}

$(function () {
    anim();

    let tabsElem = document.querySelector('.tabs');

    tabs(tabsElem);
});
