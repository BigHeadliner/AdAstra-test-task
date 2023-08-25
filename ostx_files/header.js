
$(function () {

  const hamburger = document.getElementById('menu__btn');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu__btn--open');
  });


  $('.menu').hide();

  $('.header__menu-btn').on('click', () => {
    $('.menu').slideToggle();
    $('.header__menu-btn').classList.toggle('menu__btn--open');
  })

  $('.menu a').on('click', () => {
    $('.menu').slideToggle();
    $('.header__menu-btn').removeClass('menu__btn--open');
  })



});

   

       
     



       
