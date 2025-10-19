(function ($) {
    "use strict";

//  tp-testimonial

    var swiper = new Swiper(".tp-testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
        enabled: true,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".tp-tm-button-next",
        prevEl: ".tp-tm-button-prev",
        },
    });


//  brand-slider

     var swiper = new Swiper(".tp-brand-active", {
      slidesPerView: "auto",
      spaceBetween: 80,
      freemode: true,
      centeredSlides: true,
      allowTouchMove: false,
      loop: true,
      speed: 6000,
      autoplay :{
        Delay: 1,
        disableOnInteraction: true,
      }
    });
//  brand-tittle-slider

     var swiper = new Swiper(".tp-brand-tittle-active", {
      slidesPerView: "auto",
      spaceBetween: 40,
      freemode: true,
      centeredSlides: true,
      allowTouchMove: false,
      loop: true,
      speed: 6000,
      autoplay :{
        Delay: 1,
        disableOnInteraction: true,
      }
    });


//  team-slider
    
    var swiper = new Swiper(".tp-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
        enabled: true,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".tp-team-button-next",
        prevEl: ".tp-team-button-prev",
        },
         breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });



  $('.popup-image').magnificPopup({
    type: 'image'
    
  });
  $('.popup-vedio').magnificPopup({
    type: 'iframe'
    
  });


})(jQuery);