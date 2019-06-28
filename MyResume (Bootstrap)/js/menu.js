$(document).ready(function() {
  const menuItems = $('.menu-item');
  const sections = $('.section');
  const menu = $('.menu');
  const button = $('.menu-open-icon');

  // Кнопка открытия меню
  $('.menu-open').click(() => {
    if ($(button).hasClass('fa-bars')) {
      // Замена иконки
      $(button).removeClass('fa-bars');
      $(button).addClass('fa-times');
      // Появление меню
      $(menu).css('left', '0');
    } else {
      // Замена иконки
      $(button).removeClass('fa-times');
      $(button).addClass('fa-bars');
      // Скрытие меню
      $(menu).css('left', '-150px');
    }
  });
 
  // Прокрутка страницы
  $(window).scroll(() => {

    $(sections).each((i, section) => {
      // Координаты элемента относительно окна браузера
      let itemTop = $(section).offset().top-$(window).scrollTop();
      let itemBottom = $(section).offset().top+$(section).height()-$(window).scrollTop();
      let winHeight = $(window).height();
      // Если элемент находится в верхней части окна
      // или нижняя часть находится ниже середины окна, но выше четверти (для длинных блоков)
      if ((itemTop < (winHeight / 2) && itemTop >= 0)
        || (itemBottom > (winHeight / 2) && itemBottom < (winHeight * 0.75))) {
        let id = $(section).attr('id');
      
        $(menuItems).each((i, item) => {
          // Удаление класса 'menu-active', если он есть
          if ($(item).hasClass('menu-active')) {
            $(item).removeClass('menu-active');
          }
          // Добавление класса 'menu-active', если id секции совпадает 
          // с атрибутом пункта меню
          if ($(item).attr('data-value') == id) {
            $(item).addClass('menu-active');
          }
        });
      }
    })
  })
   
});