$(document).ready(() => {

  const members = '.avatar';
  const membersInfo = $('.memberInfo');

  const modal = $('.modal').first();

  showMember = i => {
    memberInfo = $(membersInfo[i]).clone();
    const img = $($(members)[i]).css('background-image');

    $(modal).children('').not('.slide').each((i, el) => {
      $(el).remove();
    });

    modal.append(memberInfo);
    modal.css('background-image', img);
  };

  prevMember = i => {
    i--;
    if (i < 0) {
      i = $(members).length - 1;
    }
    return i;
  };

  nextMember = i => {
    i++;
    if (i == $(members).length) {
      i = 0;
    }
    return i;
  };

  $(members).click((el) => {
    i = $(el.currentTarget).index(members);
    showMember(i);
    $('.modalWindow').removeClass('modalClosed');

    $('.prev').click(() => {
      i = prevMember(i);
      showMember(i);
    })

    $('.next').click(() => {
      i = nextMember(i);
      showMember(i);
    })
    $(document).keydown(e => {
      switch (e.which) {
        case 27:
          if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
            $('.modalWindow').addClass('modalClosed');
          }
          break;
        case 37:
          if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
            i = prevMember(i);
            showMember(i);
          }
          break;
        case 39:
          if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
            i = nextMember(i);
            showMember(i);
          }
          break;
      }
    });
  });
  $('.modalShadow').click(() => {
    $('.modalWindow').addClass('modalClosed');
  });

})