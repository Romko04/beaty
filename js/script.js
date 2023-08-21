/* Burger */
const menuItems = document?.querySelectorAll('.header__menu-items');
const burger = document?.querySelector('.header__burger');
const menu = document?.querySelector('.menu__body');
const body = document?.querySelector('body');


new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 35,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  },
  breakpoints: {
    700:{
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    }
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('anchor')) {
  e.preventDefault()
      anchorClick(e.target)
  }
  if (e.target.classList.contains('btn__anchor')) {
    e.preventDefault()
        anchorClick(e.target.parentNode)
    }
  if (e.target.classList.contains('header__burger')) {
    console.log(e.target);
    e.preventDefault()
      toggleMenu()
  }
})
function anchorClick(e) {
  if (menu.classList.contains('active')) {
    toggleMenu()
  }
  const blockId = e.getAttribute('href')
  document.querySelector('' + blockId).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  })
}
function toggleMenu() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  burger.classList.contains('active') ? document.body.classList.add('scroll--block') : document.body.classList.remove('scroll--block')
}