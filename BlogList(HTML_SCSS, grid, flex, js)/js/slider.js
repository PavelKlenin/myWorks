document.addEventListener('DOMContentLoaded', () => {
  const buttonR = document.querySelector('.arrow-right');
  const buttonL = document.querySelector('.arrow-left');
  
  // стартовая позиция для слайдера (может быть любой,
  // но удобнее сделать средний элемент; отсчет с 0)
  const initialPos = 2; 
  const transition = 1; // время анимации в сек
  let items = [...document.querySelectorAll('.gallery-item')];
  let dots = [...document.querySelectorAll('.gallery-dot')];
  let currentPos = initialPos; // текущая позиция-счетчик
  // величина сдвига в зависимости от стартовой позиции
  let startPos = -100 * initialPos; 
  let itemPos = [] // массив сдвигов для каждого элемента слайдера
  let amount = items.length; // количество элементов
  let deltaRight = 1 + initialPos; // величина сдвига вправо
  let deltaLeft = amount - initialPos; // величина сдвига влево

  items.forEach((item, i) => {
    itemPos[i] = startPos;
    // задаем исходные стили для элементов
    item.style.transition = `transform ${transition}s ease`;
    item.style.transform = `translate(${itemPos[i]}%)`;
  })

  const setActiveDot = () => {
    dots.forEach((item, i) => {
      if (i == currentPos) {
        item.classList.add('active-dot'); 
      } else {
        item.classList.remove('active-dot'); 
      }
    })
  }
  
  const moveRight = () => {
    currentPos += 1; 
    // если величина позиции больше, чем элементов в массиве,
    // возвращем позицию 0
    currentPos = currentPos >= (amount) ? (0) : currentPos; 
    // индекс элемента, который перемещаем
    let reverse = currentPos - deltaRight;
    // если индекс отрицательный, вычисляем актуальный индекс
    if (reverse < 0) {
      reverse = amount + reverse;
    }
    // сдвиг каждого элемента
    items.forEach((item, i) => {
      // все элементы на 100%
      if (i!=reverse) {
        itemPos[i] -= 100;
        item.style.transform = `translate(${itemPos[i]}%)`;
      } else { 
        // кроме крайнего, который перемещается в начало/конец очереди
        // величина сдвига
        itemPos[i] += (amount - 1) * 100;
        // скрываем, чтобы не было видно перемещения
        items[i].style.opacity = '0';
        items[i].style.transform = `translate(${itemPos[i]}%`;
        // открываем через 1с из-за 'transition: transform 0.6s ease;'
        setTimeout(() => {
          items[i].style.opacity = '1';
        }, transition * 1000);
      }
    })
    setActiveDot();
  }

  const moveLeft = () => {
    currentPos -= 1;
    currentPos = currentPos < 0 ? (amount-1) : currentPos;
    let reverse = currentPos + deltaLeft;
    if (reverse >= amount) {
      reverse = reverse - amount;
    }
    items.forEach((item, i) => {
      if (i!=reverse) {
        itemPos[i] += 100;
        item.style.transform = `translate(${itemPos[i]}%)`;
      } else {
        itemPos[i] -= (amount - 1) * 100;
        items[i].style.opacity = '0';
        items[i].style.transform = `translate(${itemPos[i]}%`;
        setTimeout(() => {
          items[i].style.opacity = '1';
        }, transition * 1000);
      }
    })
    setActiveDot();
  }

  setActiveDot();
  
  buttonL.addEventListener('click', (e) => {
    e.preventDefault;
    setTimeout(moveLeft(), 1000);
    
  });
  
  buttonR.addEventListener('click', (e) => {
    e.preventDefault;
    setTimeout(moveRight(), 1000);
  });

});
