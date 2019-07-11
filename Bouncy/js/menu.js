const menuBtn = document.querySelector('.navbar_show-btn');
const menu = document.querySelector('.navbar_menu');

document.addEventListener('DOMContentLoaded', () => {

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.maxHeight == 0 ?
      menu.style.maxHeight = '500px':
      menu.removeAttribute('style');
  })
})