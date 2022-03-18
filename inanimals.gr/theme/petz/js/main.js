/*
 Template Name: PetZ
 Author: Ingrid Kuhn
 Author URI: themeforest/user/ingridk
 Version: 1.0
 */

"use strict";
$(document).ready(function () {

  //Scrolling feature

  $('.page-scroll a').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 2500, 'easeInOutExpo');
    event.preventDefault();
  });

  //	Back Top Link
  var offset = 200;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });
}); // end document ready


// Window scroll function

$(window).scroll(function () {

  // Shrink Navbar on Scroll

  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

// Window load function

$(window).load(function () {

  // Page Preloader

  $("#preloader").fadeOut("slow");

  // Pretty Photo

  $("a[data-gal^='prettyPhoto']").prettyPhoto({
    hook: 'data-gal'
  });
  ({
    animation_speed: 'normal',
    opacity: 1,
    show_title: true,
    allow_resize: true,
    counter_separator_label: '/',
    theme: 'light_square',
    /* light_rounded / dark_rounded / light_square / dark_square / facebook */
  });

  //Isotope

  var $container = $('#lightbox');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false,
      layoutMode: 'masonry'
    }

  });
  $(window).smartresize(function () {
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });

  //initialize skrollr
  skrollr.init({
    smoothScrolling: true,
    forceHeight: false
  });

  // disable skrollr if using handheld device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    skrollr.init().destroy();
  }

  //initialize stellar parallax
  $.stellar({
    hideDistantElements: false,
    horizontalScrolling: false
  });

  // disable stellar if using handheld device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $.stellar();
  }


  //Isotope Nav Filter

  $('.category a').on('click', function () {
    $('.category .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
}); // end window load

let mySwiper = $('.mySwiper')

if ( mySwiper ) {
  let swiper = new Swiper('.mySwiper', {
    resizeObserver: true,
    autoHeight: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}

