const ru = document.querySelectorAll('.ru');
const en = document.querySelectorAll('.en');
const switchLang = document.querySelector('.lang_switch');

document.addEventListener("DOMContentLoaded", () => {
  en.forEach(el => {
    el.classList.add('hide');
  })



  switchLang.addEventListener("click", (e) => {
    e.preventDefault();
    switchLang.classList.toggle('toEng');
    if (switchLang.classList.contains('toEng')) {
      switchLang.innerHTML = 'Ru';
    } else {
      switchLang.innerHTML = 'En';
    }
    ru.forEach(el => {el.classList.toggle('hide');})
    en.forEach(el => {el.classList.toggle('hide');})
  })
})
