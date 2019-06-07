$(document).ready(() => {

    // общая функция слайдера
    const modalWin = (e, pagesClass, infoClass, eventClass) => {
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

            $('.modalShadow').fadeTo(1000, 0.6);
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
            return i;
        }

        i = $(e.currentTarget).index(pages);
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
                        $('.modalShadow').css('opacity', 0);
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

        // закрытие окна кликом на тень
        $('.modalShadow').click(() => {
            $('.modalShadow').css('opacity', 0);
            $('.modalWindow').addClass('modalClosed');
            $('.next').unbind('click');
            $('.prev').unbind('click');
            $(document).unbind();
        });
    }

    // прокрутка до якоря
    $('.menu > li > a:not(:first)').click((e) => {
        e.preventDefault();
        const target = $(e.target).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPos}, 1000);
    })

    // раскрытие полного текста в Welcome
    $('.welcomeBtn').first().bind('click', (e) => {
        $('.welcomeInfo').toggleClass('fullHeight');
        $(e.target).toggleClass('readLess');
    });

    // слайдер Blogs
    $('.blogSlide').click((e) => {
        modalWin(e, 'blogSlide', 'blogText', 'dateEvent')
    });

    // слайдер Team
    $('.avatar').click((e) => {
        modalWin(e, 'avatar', 'memberInfo')
    });

    // слайдер Portfolio
    $('.portfExample').click((e) => {
        modalWin(e, 'portfExample')
    });

});