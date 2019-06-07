$(document).ready(() => {

    const modal = $('.modal').first();
    const blogs = '.blogSlide';
    const text = $('.blogText');
    const event = $('.dateEvent');

    showBlog = i => {
      const img = $($(blogs)[i]).css('background-image');
      const info = $(text[i]).clone();
      let date;
      if ($(event[i])) {
        date = $(event[i]).clone();
      }

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
        i = $(blogs).length - 1;
      }
      return i;
    }

    nextBlog = i => {
      i++;
      if (i == $(blogs).length) {
        i = 0;
      }
      return i;
    }

    $(blogs).click((e) => {
      i = $(e.currentTarget).index(blogs);
      showBlog(i);
      console.log(e.currentTarget);
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


});