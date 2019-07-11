const detailsContent = document.querySelectorAll('.details_content');
const detailsBtns = document.querySelectorAll('.details_icon');

document.addEventListener('DOMContentLoaded', () => {

  detailsBtns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      detailsBtns.forEach((btn) => {
        btn.classList.remove('details_icon-active');
      })
      btn.classList.add('details_icon-active');
      
      detailsContent.forEach((block) => {
        block.classList.remove('details_active-content');
      })
      detailsContent[i].classList.add('details_active-content');
    })
  })
})