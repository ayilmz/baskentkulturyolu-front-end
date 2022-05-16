const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = regexp.test(navigator.userAgent);

if(!isMobileDevice){
    var categoriesSwiper = new Swiper(".categories-swiper", {
        loop:true,
        simulateTouch:true,
        spaceBetween: 15,
        slidesPerView: 6,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    $(".categories-swiper-button-next").click(function(e){
        e.preventDefault();
        // Swipes to the next slide
        categoriesSwiper.slideNext();
    });
    $(".categories-swiper-button-prev").click(function(e){
        e.preventDefault();
        // Swipes to the next slide
        categoriesSwiper.slidePrev();
    });
}