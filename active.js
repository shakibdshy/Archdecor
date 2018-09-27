(function ($) {

    // Mobile Menu
    jQuery('header nav').meanmenu({
        meanScreenWidth: "768",
        meanMenuContainer: '.mobile-menu'
    });


     /* Search */
     $('.search-button__btn').on('click', function () {
         if ($('#header-input').hasClass('form__input--hidden')) {
             $('#header-input').removeClass('form__input--hidden');
             $('#header-input').addClass('form__input--show');
             $('.menu-desktop').removeClass('menu-desktop--show');
             $('.menu-desktop').addClass('menu-desktop--hidden');
         } else {
             $('#header-input').removeClass('form__input--show');
             $('#header-input').addClass('form__input--hidden');
             $('.menu-desktop').removeClass('menu-desktop--hidden');
             $('.menu-desktop').addClass('menu-desktop--show');
         }

     });

    //  Slider Active
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // Client Area
    $('.active-client').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // Brand Area
    $('.brand-area-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 8
            }
        }
    })

























})(jQuery);