//선언 : var, let, const (let은 변하는 숫자 선언, cosnt 많이쓴다)

const TOPBANNER = document.querySelector('.TopBanner')

const TOPBANNER_DOTS = document.querySelectorAll('.TopBanner .dots li');

const TOPBANNER_SLIDE = new Swiper('.TopBanner_slide', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex);
            TOPBANNER_DOTS.forEach(it => it.classList.remove('on'));
            TOPBANNER_DOTS[this.realIndex].classList.add('on')
        }
    }

});

TOPBANNER_DOTS.forEach((it, idx) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(idx);
        TOPBANNER.slideToLoop(idx);
    })
});

const TOPBANNER_CLOSE = document.querySelector('.TopBanner .close');

TOPBANNER_CLOSE.addEventListener('click', e => {
    e.preventDefault();
    TOPBANNER.classList.add('on');
})