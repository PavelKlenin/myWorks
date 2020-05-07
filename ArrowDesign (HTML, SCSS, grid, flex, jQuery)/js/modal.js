const modalWindow = (pagesClass, infoClass, eventClass) => {
  const modal = $('.modal').first();
  const pages = `.${pagesClass}`;
  const text = $(`.${infoClass}`);
  const event = $(`.${eventClass}`);


  showBlog = i => {
    const img = $($(pages)[i]).css('background-image');
    const info = $(text[i]).clone();
    const date = $(event[i]).clone();

    $(modal).children('').not('.slide').each((i, el) => {
      $(el).remove();
    });

    modal.append(date);
    modal.append(info);

    modal.css({
      'background-image': img,
    });
  };

  prevBlog = i => {
    i--;
    if (i < 0) {
      i = $(pages).length - 1;
    }
    return i;
  }

  nextBlog = i => {
    i++;
    if (i == $(pages).length) {
      i = 0;
    }
    console.log('nextBlog ', i);
    return i;
  }

  $(pages).click((el) => {
    i = $(el.target).index(pages);
    showBlog(i);
    $('.modalWindow').toggleClass('modalClosed');

    $('.prev').click(() => {
      i = prevBlog(i);
      showBlog(i);
    })

    $('.next').click(() => {
      i = nextBlog(i);
      showBlog(i);
    })

    // прокрутка стрелками,  выключение уыс
    $(document).keydown(e => {
      switch (e.which) {
        case 27:
          if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
            $('.modalWindow').addClass('modalClosed');
          }
          break;
        case 37:
          if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
            i = prevBlog(i);
            showBlog(i);
          }
          break;
        case 39:
          if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
            i = nextBlog(i);
            showBlog(i);
          }
          break;
      }
    });
  })
  // закрытие окна кликом на тень
  $('.modalShadow').click(() => {
    $('.modalWindow').addClass('modalClosed');
    $('.next').unbind('click');
    $('.prev').unbind('click');
    $(document).unbind();
  });
}