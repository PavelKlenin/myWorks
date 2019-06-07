$(document).ready(() => {


  $('.welcomeBtn').first().bind('click', () => {
    $('.welcomeInfo').toggleClass('fullHeight');
    $(this).toggleClass('readLess');
  });

});
