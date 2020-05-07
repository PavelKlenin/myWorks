const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.innerWidth < 1200) {
        slideToggle(item, items, container);
      } else {
        slideUp(item, items, container);
      }
    })
  })
})

const slideUp = (item, items, container) => {
  if (!container.classList.contains('animated')) {
    container.classList.add('animated');
    items.forEach(item => {
      item.classList.remove('preview')
      item.classList.add('animated');
    });
    setTimeout(() => {
      item.classList.add('item-active');
    }, 1000);
  } else {
    items.forEach(item => {
      item.classList.remove('item-active');
    });
    item.classList.add('item-active');
  }
}

const slideToggle = (item, items, container) => {
  if (!item.classList.contains('item-active')) {
    container.classList.add('animated');
    items.forEach(item => {
      item.classList.remove('preview');
      item.classList.add('animated');
      item.classList.remove('item-active');
    });
    item.classList.add('item-active');
  } else {
    container.classList.remove('animated');
    items.forEach(item => {
      item.classList.add('preview')
      item.classList.remove('animated');
    });
    item.classList.remove('item-active');
  }
}

