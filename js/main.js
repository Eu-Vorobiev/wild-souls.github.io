document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");
  let anchors = document.querySelectorAll("a[href*='#']");
  let scrollDown = document.querySelector(".scroll-down");
  let sectionProduct = document.querySelector("#product");
  let recipeSlider = document.querySelector(".recipes__slider");

  const swiper = new Swiper('.product__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      421: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
      1101: {
        slidesPerView: 4,
        spaceBetween: 60,
      }
    }
  });

  const swiperReviews = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 15,

    pagination: {
      el: '.swiper-pagination'
    },

    breakpoints: {
      621: {
        slidesPerView: 2,
        spaceBetween: 0,
      }
    }
  });

  const swiperRecipes = new Swiper('.recipes__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      421: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  function fixHeader() {
    if (window.pageYOffset >= 40) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    };
  };

  scrollDown.addEventListener("click", () => {
    window.scrollTo({
      top: sectionProduct.offsetTop - header.offsetHeight,
      behavior: 'smooth'
    })
  });

  window.addEventListener('scroll', fixHeader);

  window.addEventListener('scroll', function () {
    if (recipeSlider.clientHeight + window.scrollY >= recipeSlider.offsetTop + 300) {
      recipeSlider.classList.add("animated");
    }
  })
});