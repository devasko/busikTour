$( document ).ready( function () {

    //  Настройки слайдера
    $('.owl-carousel').owlCarousel({
        loop:true,

        margin: 0,

        nav: true,

        dots: true,

        navText: [],

        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1,
                dots: true,
            }
        }
    })
});
