var instagramSlider = new Swiper(".mySwiper", {
    loop:true,
    simulateTouch:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.7,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1500: {
            slidesPerView: 4.5,
            spaceBetween: 0,
        },
        1850: {
            slidesPerView: 6,
            spaceBetween: 0,
        }
    },
});


instagramSlider.on('slideChange', function () {
    console.log('slide changed');
});

$(".instagram-slider-next-button").click(function(e){
    e.preventDefault();
    // Swipes to the next slide
    instagramSlider.slideNext();
});
$(".instagram-slider-prev-button").click(function(e){
    e.preventDefault();
    // Swipes to the next slide
    instagramSlider.slidePrev();
});