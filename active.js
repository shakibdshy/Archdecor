(function ($) {

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
})(jQuery);