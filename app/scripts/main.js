$(document).ready(function() {
  const $owlOne = $('.owl-one');
  const $owTwo = $('.owl-two');
  const $owlThree = $('.owl-three');
  const $hamburgerButton = $('.js-hamburger-button');
  const $navigation = $('.js-navigation');
  const $html = $('.js-html');

  // LAZY LOAD IMAGES
  const img = document.querySelector('img');
  const observer = lozad(img);
  observer.observe();

  // FIRST SLIDER
  $owlOne
    .on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace) return;
      var carousel = e.relatedTarget;
      $('#info').html(`${carousel.relative(carousel.current()) + 1} <span class="gallery__label">из</span> ${carousel.items().length}`);
    })
    .owlCarousel({
      loop: true,
      center: true,
      items: 1,
      dots: false,
      nav: true,
      margin: 53,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
  $owlOne.find('.owl-next').html('<div class="gallery__square gallery__square--left"></div>');
  $owlOne.find('.owl-prev').html('<div class="gallery__square gallery__square--right"></div>');

  // SECOND SLIDER
  $owTwo.owlCarousel({
    dots: true,
    nav: true,
    loop: true,
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
  });
  $owTwo.find('.owl-next').html('<i class="icon icon--arrow-right testimonials__arrow testimonials__arrow--left"></i>');
  $owTwo.find('.owl-prev').html('<i class="icon icon--arrow-left testimonials__arrow testimonials__arrow--right"></i>');

  $owlThree.owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },

      700: {
        items: 3
      },
      1000: {
        items: 4
      },
      1300: {
        items: 6
      }
    }
  });

  // THIRD SLIDER
  $owlThree.find('.owl-next').html('<i class="icon icon--arrow-right partners__arrow partners__arrow--left"></i>');
  $owlThree.find('.owl-prev').html('<i class="icon icon--arrow-left partners__arrow partners__arrow--right"></i>');

  // MENU
  $hamburgerButton.click(() => {
    $hamburgerButton.toggleClass('is-active');
    $navigation.toggleClass('is-active');
    $html.toggleClass('menu-active');
  });

  // SCROLL NAVIGATION
  const setButtonNavigation = function(buttonSelector, sectionSelector) {
    $(buttonSelector).click(function() {
      const sectionPosition = $(sectionSelector).offset().top;
      $('html, body').animate(
        {
          scrollTop: sectionPosition
        },
        'slow'
      );
    });
  };

  setButtonNavigation('.js-link-program', '.js-section-program');
  setButtonNavigation('.js-link-gallery', '.js-section-gallery');
  setButtonNavigation('.js-link-testimonials', '.js-section-testimonials');
  setButtonNavigation('.js-link-partners', '.js-section-partners');
  setButtonNavigation('.js-link-contact', '.js-section-contact');
});
