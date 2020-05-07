const portfolioBtns = document.querySelectorAll('.portfolio_menu-btn');
const portfolioMenu = document.querySelector('.portfolio_menu-list');

const portfolioItems = document.querySelectorAll('.portfolio_item');


const showItems = (button) => {
  const category = button.innerHTML.toLowerCase();
  category === 'all works' ?
  portfolioItems.forEach(item => {
    item.classList.remove('hiddenItem');
  }) :
  portfolioItems.forEach(item => {
    item.classList.remove('hiddenItem');
    !item.classList.contains(`portfolio_${category}`) ?
      item.classList.add('hiddenItem') :
      null;
  })
}

document.addEventListener('DOMContentLoaded', () => {

  portfolioBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      setTimeout(() => {
        portfolioMenu.classList.toggle('s-menu-height');
      }, 600);
      portfolioBtns.forEach((btn) => {
        btn.classList.remove(`menu-list-active`);
        setTimeout(() => {
          btn.classList.toggle('s-list-height');
        }, 600);
      })
      btn.classList.add('menu-list-active');
      showItems(btn);
    })
  })
})

