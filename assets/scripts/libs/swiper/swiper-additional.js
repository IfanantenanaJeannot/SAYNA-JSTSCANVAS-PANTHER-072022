var swiper = new Swiper(".animationSlide", {
    slidesPerView: 2,
    spaceBetween: 1,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        //j'ai preferé l'activé
        prevEl: ".swiper-button-prev",
    },
});