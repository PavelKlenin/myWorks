/* размеры поля */
const X = 20;
const Y = 20;

/* змейка */
function Snake() {
  
  let snakeTimer;

  score = 0;
  startGame = false;
  snakeBody = [];
  direction = 'y+';
  speed = 200;

  
  /* создание змейки в центре поля */
  startPosition = () => {
    const startX = Math.floor(X / 2);
    const startY = Math.floor(Y / 2);

    let tail = document.querySelector(`.cell-${startY}-${startX}`);
    let head = document.querySelector(`.cell-${startY+1}-${startX}`);
    head.classList.add('snakeUnit');
    tail.classList.add('snakeUnit');

    snakeBody.push(head);
    snakeBody.push(tail);
    console.info(snakeBody);
  }
  
  /* движение */
  move = () => {
    let newHead;
    let posY = parseInt(snakeBody[snakeBody.length - 1].classList[1].split('-')[1]);
    let posX = parseInt(snakeBody[snakeBody.length - 1].classList[1].split('-')[2]);

    if (direction == 'y+') {
      newHead = document.querySelector(`.cell-${(posY-1)}-${posX}`);
      if (posY == 1) {
        newHead = document.querySelector(`.cell-${Y}-${posX}`);
      }
    } else if (direction == 'y-') {
      newHead = document.querySelector(`.cell-${posY+1}-${posX}`);
      if (posY == Y) {
        newHead = document.querySelector(`.cell-1-${posX}`);
      }
    } else if (direction == 'x+') {
      newHead = document.querySelector(`.cell-${posY}-${posX+1}`);
      if (posX == X) {
        newHead = document.querySelector(`.cell-${posY}-1`);
      }

    } else if (direction == 'x-') {
      newHead = document.querySelector(`.cell-${posY}-${posX-1}`);
      if (posX == 1) {
        newHead = document.querySelector(`.cell-${posY}-${X}`);
      }
    }
    /* проверка на столкновение */
    if (!isSnake(newHead)) {
      newHead.classList.add('snakeUnit');
      snakeBody.push(newHead);
      /* проверка на еду */
      if (!eatFood(newHead)) {
        snakeBody[0].classList.remove('snakeUnit');
        snakeBody.shift();
      }
    } else finishGame();

  }
  
  /* клавиши управления */
  changeDirection = (e) => {
    switch (e.keyCode) {
      case 37:
        if (direction != 'x+') {
          setTimeout(() => {
            direction = 'x-';
          }, speed) // задержка speed, чтобы змейка не развернулась сама в себя
        }
        break;
      case 38:
        if (direction != 'y-') {
          setTimeout(() => {
            direction = 'y+';
          }, speed)
        }
        break;
      case 39:
        if (direction != 'x-') {
          setTimeout(() => {
            direction = 'x+';
          }, speed)
        }
        break;
      case 40:
        if (direction != 'y+') {
          setTimeout(() => {
            direction = 'y-';
          }, speed)
        }
        break;
      default:
        break;
    }
    console.log(e.keyCode);
    console.log(direction);
  }

  /* проверка на принадлежность ячейки змейке */
  isSnake = (cell) => {
    check = false;
    if (snakeBody.includes(cell)) {
      check = true;
    }
    return check;
  }
  
  /* проверка на еду */
  eatFood = (cell) => {
    check = false;
    if (cell.classList.contains('foodUnit')) {
      cell.classList.remove('foodUnit');
      score++;
      console.log(score);
      scoreField.innerHTML = score;
      createFood();
      check = true;
    }
    return check;
  }

  /* создание еды в любом месте поля кроме тела змейки */
  createFood = () => {
    let foodY = Math.floor(Math.random() * (Y - 1) + 1);
    let foodX = Math.floor(Math.random() * (X - 1) + 1);

    let foodUnit = document.querySelector(`.cell-${foodY}-${foodX}`);
    console.log(foodUnit);
    if (!isSnake(foodUnit)) {
      foodUnit.classList.add('foodUnit');
    } else {
      createFood()
    }
  }

  /* конец игры */
  finishGame = () => {
    startGame = false;
    /* остановка движения змейки */
    clearInterval(snakeTimer);
    /* вывод сообщения */
    let lostMsg = document.querySelector('.lostMsg');
    lostMsg.innerHTML = `Вы проиграли. Счёт: ${score}`;
    shadow.classList.remove('invisible');
    lostAlert.classList.remove('invisible');
  }
  
  /* начало игры */
  this.init = () => {
    startGame = true;
    startPosition();
    snakeTimer = setInterval(move, speed);
    createFood();
    addEventListener('keydown', changeDirection);
  }
}

let snake = new Snake();

/* рисование поля */
const borderColor = '#008000';
const field = document.querySelector('.field');
for (i = 0; i < Y; i++) {
  let fieldRow = document.createElement('div');
  fieldRow.className = 'fieldRow';
  field.appendChild(fieldRow);
  for (j = 0; j < X; j++) {
    let fieldCell = document.createElement('div');
    fieldCell.className = `fieldCell cell-${i+1}-${j+1}`;
    fieldCell.style.borderLeft = `1px solid ${borderColor}`;
    fieldCell.style.borderTop = `1px solid ${borderColor}`;
    if (j == Y - 1) {
      fieldCell.style.borderRight = `1px solid ${borderColor}`;
    }
    if (i == X - 1) {
      fieldCell.style.borderBottom = `1px solid ${borderColor}`;
    }
    fieldRow.appendChild(fieldCell);
  }
}

/* подтверждение после проигрыша */
const lostAlert = document.querySelector('.lostAlert');
const shadow = document.querySelector('.shadow');
const confirmBtn = document.querySelector('.confirmBtn');

confirmBtn.addEventListener('click', () => {
  shadow.classList.add('invisible');
  lostAlert.classList.add('invisible');
  location.reload();
});

/* Кнопки старт, сброс*/
let startBtn = document.querySelector('.start');
let clearBtn = document.querySelector('.clear');

startBtn.addEventListener('click', () => {
  /* проверка запущена игра или нет */
  if (!startGame) {
    snake.init();
  }
});
clearBtn.addEventListener('click', () => {
  location.reload();
});

/* Счёт */
let scoreField = document.querySelector('.score');
scoreField.innerHTML = score;


