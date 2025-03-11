const bg = document.querySelectorAll('.bg-wrap li')

let i = 0;

bg[i].classList.add('active')


const swiper = new Swiper(".gallery", {
    navigation: {
        nextEl: ".gallery-wrap .swiper-button-next",
        prevEl: ".gallery-wrap .swiper-button-prev",
    },
    loop: true,
    on: {
        activeIndexChange: function () {
            let realIndex = this.realIndex
            console.log(realIndex);
            bg.forEach(function (item) {
                item.classList.remove('active')
            })
            bg[realIndex].classList.add('active')
        }
    }

});