$(document).ready(() => {
  
  const myWorks = $('.portfolio-item');
  const details = $('.portfolio-details').clone();
  const images = $('.portfolio-img').clone();
  let sliderItems = [];

  // Добавление элементов в карусель
  $(myWorks).each((i, work) => {
    // Создание нового элемент
    let newItem = $('<div class="carousel-item"></div>');
    // Добавление информации в элемент
    newItem.append(images[i], details[i]);
    // Добавление элемента в карусель
    $('.carousel-inner').append(newItem);
    // Замена классов для стилей в карусели
    $(details[i]).addClass('carousel-caption d-md-block');
    $(details[i]).removeClass('portfolio-details');
    // Показать ссылку
    $(`.carousel-caption > a:eq(${i})`).removeClass('invisible');

    sliderItems = [...sliderItems, newItem ]; 
    
    $(work).click(() => {
      // Удаление "active" для предотвращения наложения
      // при повторных кликах
      $(sliderItems[i]).siblings('.carousel-item').removeClass('active');
      // Включение "нужного" слайда
      $(sliderItems[i]).hasClass('active') ? null : $(sliderItems[i]).addClass('active');
    })
  })

});