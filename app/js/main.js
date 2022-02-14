$(function () {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.burger__menu');
  const menuLink = document.querySelectorAll('.menu__link')
  const bodyLock = document.querySelector('body');
  const logo = document.querySelector('.logo');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
      burger.classList.add('burger_active');
      bodyLock.classList.add('lock');
      logo.classList.add('hide')
    } else {
      burger.classList.remove('burger_active');
      bodyLock.classList.remove('lock');
      logo.classList.remove('hide')
    }
  });

  menuLink.forEach((el) => {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      burger.classList.remove('burger_active');
      logo.classList.remove('hide');
      bodyLock.classList.remove('lock');
    })
  })


  let menuItems = document.getElementsByClassName("menu__item");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  const anchors = document.querySelectorAll('[data-where="anchor"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  const swiper = new Swiper('.hero__slider', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 3,
    preventClicks: false,
    keyboard: {
      enabled: true,
    },
    loop: true,

    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,

      breakpoints: {
        320: {
          depth: 100,
        },

        500: {
          depth: 250,
        },
        1000: {
          depth: 350,
        },
      }

    },

    breakpoints: {
      320: {
        slidesPerView: 2,
      },

      500: {
        slidesPerView: 2,
        depth: 150,
      },

      1000: {
        slidesPerView: 3,
      }
    }

  });

  const swiper2 = new Swiper('.autopark__slider', {
    loop: true,
    slidesPerView: 3,
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      410: {
        slidesPerView: 1.25,
      },

      500: {
        slidesPerView: 2.5,
      },

      768: {
        slidesPerView: 3,
      }
    }

  });

  const items = document.querySelectorAll(".conditions__button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));


  const swiper3 = new Swiper('.feedback__slider', {
    loop: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });


  const swiperSlider = new Swiper('.slider', {
    loop: true,   
    slidesPerView: 4,
    spaceBetween: 24,
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      410: {
        slidesPerView: 1.25,
      },

      769: {
        slidesPerView: 3,
      },

      1001: {
        slidesPerView: 4,
      }
    }

  });



  const videoPlay = document.querySelector('.feedback__video-play');
  const videoFrame = document.querySelector('.feedback__video');

  videoFrame.addEventListener('click', () => {
    videoPlay.classList.toggle('active');
  });


  let changeVideo = document.querySelector('.feedback__video-desktop');

  window.addEventListener('resize', changeSize);

  changeSize();

  function changeSize() {
    if (document.documentElement.clientWidth > 1000) {
      changeVideo.setAttribute('width', 972 + 'px');
      changeVideo.setAttribute('height', 421 + 'px')

    } else if (document.documentElement.clientWidth <= 1000 && document.documentElement.clientWidth >= 630) {
      changeVideo.setAttribute('width', 600 + 'px');
      changeVideo.setAttribute('height', 350 + 'px')
    } else if (document.documentElement.clientWidth < 630 && document.documentElement.clientWidth >= 410) {
      changeVideo.setAttribute('width', 400 + 'px');
      changeVideo.setAttribute('height', 250 + 'px')
    } else if (document.documentElement.clientWidth < 410) {
      changeVideo.setAttribute('width', 300 + 'px');
      changeVideo.setAttribute('height', 200 + 'px')
    }
  };


  const closeButton = document.querySelector('.modal__close');
  const modalWindow = document.querySelector('.modal');

  closeButton.addEventListener('click', function () {
    modalWindow.classList.add('close');
  });



});