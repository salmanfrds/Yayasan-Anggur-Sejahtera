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

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
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

    autoplay: {
        delay: 2000,
    },
});