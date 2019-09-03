const menuBtn = document.querySelector('.navbar_show-btn');
const menu = document.querySelector('.navbar_menu');
const [...navMain] = document.querySelectorAll('.navbar_menu > li > a');

document.addEventListener('DOMContentLoaded', () => {

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.maxHeight == 0 ?
      menu.style.maxHeight = '500px':
      menu.removeAttribute('style');
  })

  // плавная прокрутка к якорю
  navMain.forEach((item) => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          const href = e.target.getAttribute('href');
          const aim = document.querySelector(href);
          aim.scrollIntoView({block: 'start', behavior: 'smooth'});
      })
  });
})