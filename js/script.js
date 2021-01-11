const icon = document.querySelector(".bottom-header__btn");
const search = document.querySelector(".bottom-header__searchb");
    
    icon.addEventListener("click", function (e) {
      e.preventDefault();
        search.classList.add('active');
    });


$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}

var swiper1 = new Swiper('.baner__slide', {
    
    navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre',
      },
    pagination: {
      el: '.swiper-pagination',
    },
  });

var swiper2 = new Swiper('.section-doctors__slide', {
  
  spaceBetween: 20,
  slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre',
    },
    breakpoints: {
      '960': {
        slidesPerView: 2,
        
      },
      '1165': {
        slidesPerView: 4,
       
      },
      '1400': {
        slidesPerView: 5.06,
       
      },
    }
 
  });
  
  var swiper3 = new Swiper('.section-reviews__slide', {
    
    spaceBetween: 20,
    freeMode: false,
    navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre',
    },
    breakpoints: {
      '960': {
        slidesPerView: 1,
        
      },
      '1165': {
        slidesPerView: 2,
       
      },
      '1580': {
        slidesPerView: 3.03,
       
      },
    }
  });


  const more = document.querySelector(".section-reviews__more");
const scrolll = document.querySelector(".section-reviews__scrolll");
    
more.addEventListener("click", function (e) {
        scrolll.classList.add('open');
    });


    const headeBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.bottom-header__nav');
  
    
      headeBurger.addEventListener("click", function (e) {
        headeBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
      });
    