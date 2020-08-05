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
    });

    //  Настройки маски ввода телефона

    $("#phone").mask("+375 (999) 99 99 99");

//    Галерея автопарка

    $('#thumbs').delegate('img','click', function(){
        $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
        $('#description').html($(this).attr('alt'));
    });


});
