$(document).ready(() => {

    const pages = '.portfExample';
    const modal = $('.modal').first();

    showPage = i => {
        const img = $($(pages)[i]).css('background-image');

        $(modal).children('').not('.slide').each((i, el) => {
            $(el).remove();
        });

        modal.css('background-image', img);
    };

    prevPage = i => {
        i--;
        if (i < 0) {
            i = $(pages).length - 1;
        }
        return i;
    };

    nextPage = i => {
        i++;
        if (i == $(pages).length) {
            i = 0;
        }
        return i;
    };

    $(pages).click((el) => {
        i = $(el.currentTarget).index(pages);
        showPage(i);
        $('.modalWindow').removeClass('modalClosed');

        $('.prev').click(() => {
            i = prevPage(i);
            showPage(i);
        })

        $('.next').click(() => {
            i = nextPage(i);
            showPage(i);
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
                        i = prevPage(i);
                        showPage(i);
                    }
                    break;
                case 39:
                    if (!$('.modalWindow').hasClass('modalClosed')) { // только при включенном модальном окне
                        i = nextPage(i);
                        showPage(i);
                    }
                    break;
            }
        });
    });
    $('.modalShadow').click(() => {
        $('.modalWindow').addClass('modalClosed');
    });

})