var heroBanner = new Swiper(".hero-banner-swiper", {
    loop:true,
    simulateTouch:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 20,
});


$(".hero-banner-swiper-button-next").click(function(e){
    e.preventDefault();
    // Swipes to the next slide
    heroBanner.slideNext();
});
$(".hero-banner-swiper-button-prev").click(function(e){
    e.preventDefault();
    // Swipes to the next slide
    heroBanner.slidePrev();
});