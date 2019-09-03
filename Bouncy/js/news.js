const news = document.querySelectorAll('.news_item');
const newsBtns = document.querySelectorAll('.news_icon');

document.addEventListener('DOMContentLoaded', () => {
  switchTab(newsBtns, news, 'news');
})