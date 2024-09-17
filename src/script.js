function shownav() {
  const hambutton = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  hambutton.addEventListener("click", function() {
      hambutton.classList.toggle("hamburger-active");
      menu.classList.toggle("hidden");
  });
};
  
document.addEventListener("DOMContentLoaded", function() {
  shownav();
});

const swiperHome = new Swiper('.swiper-home', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
    
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: 'true'
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
      delay: 2000,
  },
});

const swiperProgram = new Swiper('.swiper-program', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});